import RBSheet from "react-native-raw-bottom-sheet";
import {
    defaultAccentColor,
    defaultAppBlack,
    sheetBackgroundColor,
    sheetBorderRadius,
    sheetDraggableColor,
} from "../../styles/const";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const FilterBottomSheet = ({ filterSheet }: { filterSheet: any }) => {
    const transactionTypeList = ["all", "deposits", "withdrawals", "utilities"];

    const [transactionType, setTransactionType] = useState(
        transactionTypeList[0]
    );

    return (
        <RBSheet
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(0,0,0,0.25)",
                    padding: 0,
                },
                draggableIcon: {
                    backgroundColor: sheetDraggableColor,
                },
                container: {
                    backgroundColor: sheetBackgroundColor,
                    borderRadius: sheetBorderRadius,
                },
            }}
            customModalProps={{
                animationType: "slide",
                statusBarTranslucent: true,
            }}
            height={hp(47)}
            openDuration={150}
            closeDuration={150}
            ref={filterSheet}
            draggable
        >
            <View style={styles.contentDiv}>
                <Text style={styles.contentDiv.titleText}>Filter by</Text>

                <View style={styles.contentDiv.filterSection}>
                    <Text style={styles.contentDiv.filterSection.titleText}>
                        Transaction Type
                    </Text>
                    <View style={styles.contentDiv.filterSection.content}>
                        {transactionTypeList.map((tt, index) => {
                            return (
                                <Pressable
                                    style={
                                        transactionType === tt
                                            ? styles.contentDiv.filterSection
                                                  .content.activeButton
                                            : styles.contentDiv.filterSection
                                                  .content.button
                                    }
                                    key={index}
                                    onPress={() => setTransactionType(tt)}
                                >
                                    <Text
                                        style={
                                            transactionType === tt
                                                ? styles.contentDiv
                                                      .filterSection.content
                                                      .activeButton.text
                                                : styles.contentDiv
                                                      .filterSection.content
                                                      .button.text
                                        }
                                    >
                                        {tt}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>
                </View>

                <View style={styles.contentDiv.filterSection}>
                    <Text style={styles.contentDiv.filterSection.titleText}>
                        Date
                    </Text>
                    <View
                        style={{
                            ...styles.contentDiv.filterSection.content,
                            gap: wp(8),
                        }}
                    >
                        <View
                            style={
                                styles.contentDiv.filterSection.content
                                    .dateSelectDiv
                            }
                        >
                            <Text
                                style={
                                    styles.contentDiv.filterSection.content
                                        .dateSelectDiv.text
                                }
                            >
                                From
                            </Text>
                            <View
                                style={
                                    styles.contentDiv.filterSection.content
                                        .dateSelectDiv.button
                                }
                            >
                                <Text
                                    style={
                                        styles.contentDiv.filterSection.content
                                            .dateSelectDiv.button.text
                                    }
                                >
                                    DD / MM / YY
                                </Text>
                            </View>
                        </View>
                        <View
                            style={
                                styles.contentDiv.filterSection.content
                                    .dateSelectDiv
                            }
                        >
                            <Text
                                style={
                                    styles.contentDiv.filterSection.content
                                        .dateSelectDiv.text
                                }
                            >
                                To
                            </Text>
                            <View
                                style={
                                    styles.contentDiv.filterSection.content
                                        .dateSelectDiv.button
                                }
                            >
                                <Text
                                    style={
                                        styles.contentDiv.filterSection.content
                                            .dateSelectDiv.button.text
                                    }
                                >
                                    DD / MM / YY
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View></View>

                <View style={styles.contentDiv.applyButtonDiv}>
                    <Pressable style={styles.contentDiv.applyButtonDiv.button}>
                        <Text
                            style={styles.contentDiv.applyButtonDiv.button.text}
                        >
                            Apply
                        </Text>
                    </Pressable>
                </View>
            </View>
        </RBSheet>
    );
};

const styles = StyleSheet.create({
    contentDiv: {
        padding: wp(3),
        paddingLeft: wp(5.5),
        paddingRight: wp(5.5),
        titleText: {
            color: defaultAppBlack,
            fontSize: 20,
            fontFamily: "Bricolage",
            letterSpacing: 0.4,
            paddingBottom: hp(2),
        },
        filterSection: {
            paddingTop: hp(2),
            titleText: {
                color: "rgba(0,0,0,0.8)",
                fontSize: 16,
                fontFamily: "Bricolage",
                letterSpacing: 0.5,
            },
            content: {
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 10,
                paddingTop: 15,
                paddingBottom: 15,
                button: {
                    borderWidth: 1.5,
                    borderColor: "rgba(0,0,0,0.1)",
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 8,
                    text: {
                        color: "rgba(0,0,0,0.6)",
                        fontSize: hp(1.5),
                        fontFamily: "BricolageLight",
                        letterSpacing: 0.5,
                        textTransform: "capitalize",
                    },
                },
                activeButton: {
                    borderWidth: 1.5,
                    borderColor: `${defaultAccentColor}`,
                    backgroundColor: `${defaultAccentColor}66`,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 8,
                    text: {
                        color: "#000000",
                        fontSize: hp(1.5),
                        fontFamily: "BricolageLight",
                        letterSpacing: 0.5,
                        textTransform: "capitalize",
                    },
                },
                dateSelectDiv: {
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 8,
                    text: {
                        color: "rgba(0,0,0,0.7)",
                        fontSize: hp(1.7),
                        fontFamily: "BricolageLight",
                        letterSpacing: 0.5,
                    },
                    button: {
                        borderWidth: 1.5,
                        borderColor: "rgba(0,0,0,0.1)",
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 8,
                        text: {
                            color: "rgba(0,0,0,0.6)",
                            fontSize: hp(1.5),
                            fontFamily: "BricolageLight",
                            letterSpacing: 0.5,
                            textTransform: "uppercase",
                        },
                    },
                },
            },
        },
        applyButtonDiv: {
            width: "100%",
            paddingTop: hp(3),
            button: {
                width: "100%",
                height: hp(5.3),
                backgroundColor: defaultAccentColor,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                text: {
                    color: "#ffffff",
                    fontSize: hp(1.8),
                    fontFamily: "Bricolage",
                    letterSpacing: 0.6,
                },
            },
        },
    },
} as any);

export default FilterBottomSheet;
