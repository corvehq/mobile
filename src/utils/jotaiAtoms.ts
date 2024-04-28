import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage } from "jotai/utils";

export let isBalanceHidden = atomWithStorage("isBalanceHidden", false);
AsyncStorage.getItem("isBalancHiddenState").then((data: any) => {
    console.log("SETTING SOMETHING... ", Boolean(data));
    isBalanceHidden = atomWithStorage("isBalanceHidden", Boolean(data));
});
