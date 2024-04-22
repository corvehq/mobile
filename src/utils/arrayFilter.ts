import _fuse2 from "fuse.js";

const fusee: any = _fuse2;

function flatten(array: any) {
    return array.reduce(function (flat: any, toFlatten: any) {
        return flat.concat(
            Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
        );
    }, []);
}

function getValuesForKey(key: any, item: any) {
    var keys = key.split(".");
    var results = [item];
    keys.forEach(function (_key: any) {
        var tmp: any = [];
        results.forEach(function (result) {
            if (result) {
                if (result instanceof Array) {
                    var index = parseInt(_key, 10);
                    if (!isNaN(index)) {
                        return tmp.push(result[index]);
                    }
                    result.forEach(function (res: any) {
                        tmp.push(res[_key]);
                    });
                } else if (result && typeof result.get === "function") {
                    tmp.push(result.get(_key));
                } else {
                    tmp.push(result[_key]);
                }
            }
        });

        results = tmp;
    });

    // Support arrays and Immutable lists.
    results = results.map(function (r) {
        return r && r.push && r.toArray ? r.toArray() : r;
    });
    results = flatten(results);

    return results.filter(function (r) {
        return typeof r === "string" || typeof r === "number";
    });
}

function searchStrings(strings: any, term: any) {
    var _ref: any =
            arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : {},
        caseSensitive = _ref.caseSensitive,
        fuzzy = _ref.fuzzy,
        sortResults = _ref.sortResults,
        exactMatch = _ref.exactMatch;

    strings = strings.map(function (e: any) {
        return e.toString();
    });

    try {
        if (fuzzy) {
            if (typeof strings.toJS === "function") {
                strings = strings.toJS();
            }
            var fuse = new fusee.default(
                strings.map(function (s: any) {
                    return { id: s };
                }),
                {
                    keys: ["id"],
                    id: "id",
                    caseSensitive: caseSensitive,
                    shouldSort: sortResults,
                }
            );
            return fuse.search(term).length;
        }
        return strings.some(function (value: any) {
            try {
                if (!caseSensitive) {
                    value = value.toLowerCase();
                }
                if (exactMatch) {
                    term = new RegExp("^" + term + "$", "i");
                }
                if (value && value.search(term) !== -1) {
                    return true;
                }
                return false;
            } catch (e) {
                return false;
            }
        });
    } catch (e) {
        return false;
    }
}

export function createFilter(term: any, keys: any) {
    var options: any =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return function (item: any) {
        if (term === "") {
            return true;
        }

        if (!options.caseSensitive) {
            term = term.toLowerCase();
        }

        var terms = term.split(" ");

        if (!keys) {
            return terms.every(function (term: any) {
                return searchStrings([item], term);
            });
        }

        if (typeof keys === "string") {
            keys = [keys];
        }

        return terms.every(function (term: any) {
            // allow search in specific fields with the syntax `field:search`
            var currentKeys: any = void 0;
            if (term.indexOf(":") !== -1) {
                var searchedField = term.split(":")[0];
                term = term.split(":")[1];
                currentKeys = keys.filter(function (key: any) {
                    return key.toLowerCase().indexOf(searchedField) > -1;
                });
            } else {
                currentKeys = keys;
            }

            return currentKeys.some(function (key: any) {
                var values = getValuesForKey(key, item);
                return searchStrings(values, term);
            });
        });
    };
}
