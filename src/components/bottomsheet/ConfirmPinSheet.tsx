import { Pressable, StyleSheet, Text, View } from "react-native";
import RBSheet, { RBSheetRef } from "react-native-raw-bottom-sheet";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { LegacyRef, useState } from "react";
import * as Haptics from "expo-haptics";
import CircleCloseIcon from "../../assets/icons/CircleCloseIcon";
import { defaultAccentColor } from "../../styles/const";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../../utils/types";
import { toastNotification } from "../../utils/toast";

const ConfirmPinSheet = ({
    confirmPinSheet,
    successComponent,
}: {
    confirmPinSheet: LegacyRef<RBSheetRef> | any;
    successComponent: string;
}) => {
    const { navigate } = useNavigation<Nav>();
    const [pinText, setPinText] = useState("");
    const [asteriskPin, setAsteriskPin] = useState("");

    const keyboardInput = (value: string) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

        if (pinText === "") {
            setPinText(value);
            setAsteriskPin("*");
        } else {
            if (pinText.length !== 4) {
                setPinText(pinText + value);
                setAsteriskPin(asteriskPin + "*");
            }
        }
    };

    const deleteInput = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

        if (pinText.length === 1) {
            setPinText("");
            setAsteriskPin("");
        } else {
            setPinText(pinText.slice(0, pinText.length - 1));
            setAsteriskPin(asteriskPin.slice(0, asteriskPin.length - 1));
        }
    };

    const clearInput = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setPinText("");
        setAsteriskPin("");
    };

    const proceedToSend = () => {
        if (pinText !== "1234") {
            console.log("CAN'T PROCEED");
            toastNotification(
                "error",
                "Incorrect Transaction Pin",
                "The entered transaction pin is incorrect",
            );
            return;
        }
        confirmPinSheet.current.close();
        navigate("TransactionSuccess", {
            data: {
                successComponent,
            },
        });
    };

    return (
        <>
            <RBSheet
                customStyles={{
                    ...styles.bankBottomSheet,
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        padding: wp(0),
                    },
                    draggableIcon: {
                        backgroundColor: "grey",
                    },
                    container: {
                        backgroundColor: "#f2f2f2",
                        borderRadius: 20,
                    },
                }}
                customModalProps={{
                    animationType: "slide",
                    statusBarTranslucent: true,
                }}
                height={hp(75)}
                openDuration={150}
                closeDuration={150}
                ref={confirmPinSheet}
                draggable
            >
                <View style={styles.confirmBottomSheet.sheetContent}>
                    <Text style={styles.confirmBottomSheet.sheetContent.title}>
                        Confirm Transaction
                    </Text>
                    <Text
                        style={styles.confirmBottomSheet.sheetContent.subTitle}
                    >
                        Enter your transaction pin to confirm this transaction
                    </Text>
                    <View
                        style={
                            styles.confirmBottomSheet.sheetContent.keyboardDiv
                        }
                    >
                        <View
                            style={
                                styles.confirmBottomSheet.sheetContent
                                    .keyboardDiv.textDiv
                            }
                        >
                            <Text
                                style={
                                    styles.confirmBottomSheet.sheetContent
                                        .keyboardDiv.textDiv.amount
                                }
                            >
                                {asteriskPin}
                            </Text>
                        </View>
                        <View
                            style={
                                styles.confirmBottomSheet.sheetContent
                                    .keyboardDiv.keyboard
                            }
                        >
                            <View
                                style={
                                    styles.confirmBottomSheet.sheetContent
                                        .keyboardDiv.keyboard.row
                                }
                            >
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("1")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        1
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("2")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        2
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("3")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        3
                                    </Text>
                                </Pressable>
                            </View>
                            <View
                                style={
                                    styles.confirmBottomSheet.sheetContent
                                        .keyboardDiv.keyboard.row
                                }
                            >
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("4")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        4
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("5")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        5
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("6")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        6
                                    </Text>
                                </Pressable>
                            </View>
                            <View
                                style={
                                    styles.confirmBottomSheet.sheetContent
                                        .keyboardDiv.keyboard.row
                                }
                            >
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("7")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        7
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("8")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        8
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("9")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        9
                                    </Text>
                                </Pressable>
                            </View>
                            <View
                                style={{
                                    ...styles.confirmBottomSheet.sheetContent
                                        .keyboardDiv.keyboard.row,
                                    justifyContent: "flex-end",
                                    gap: 25,
                                }}
                            >
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={() => keyboardInput("0")}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        0
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.keyboard.row.keys
                                    }
                                    onPress={deleteInput}
                                    onLongPress={clearInput}
                                >
                                    <Text
                                        style={
                                            styles.confirmBottomSheet
                                                .sheetContent.keyboardDiv
                                                .keyboard.row.keys.text
                                        }
                                    >
                                        <CircleCloseIcon />
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                        <View
                            style={
                                styles.confirmBottomSheet.sheetContent
                                    .keyboardDiv.sendButtonDiv
                            }
                        >
                            <Pressable
                                style={
                                    styles.confirmBottomSheet.sheetContent
                                        .keyboardDiv.sendButtonDiv.button
                                }
                                onPress={proceedToSend}
                            >
                                <Text
                                    style={
                                        styles.confirmBottomSheet.sheetContent
                                            .keyboardDiv.sendButtonDiv.button
                                            .text
                                    }
                                >
                                    Complete Transaction
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </RBSheet>
        </>
    );
};

const styles = StyleSheet.create({
    confirmBottomSheet: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        sheetContent: {
            height: "100%",
            width: "100%",
            padding: 0,
            title: {
                fontSize: 20,
                fontWeight: "400",
                letterSpacing: 0.4,
                color: "rgba(0,0,0,0.9)",
                textAlign: "center",
                fontFamily: "BricolageLight",
                paddingTop: 15,
                paddingBottom: 2,
            },
            subTitle: {
                fontSize: 14,
                fontWeight: "400",
                letterSpacing: 0.3,
                color: "rgba(0,0,0,0.7)",
                textAlign: "center",
                fontFamily: "BricolageLight",
                paddingTop: 5,
                paddingBottom: 10,
            },
            keyboardDiv: {
                height: "100%",
                width: "100%",
                paddingTop: hp(2.5),
                paddingBottom: 20,
                paddingLeft: wp(6),
                paddingRight: wp(6),
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                textDiv: {
                    amount: {
                        paddingTop: 10,
                        color: "#000000",
                        textAlign: "center",
                        height: 60,
                        fontSize: 37,
                        letterSpacing: 20,
                        fontFamily: "BricolageLight",
                        borderColor: "rgba(0,0,0,0.001)",
                        borderWidth: 1.5,
                        borderRadius: 35,
                    },
                    minimum: {
                        color: "rgba(0,0,0,0.8)",
                        paddingTop: 18,
                        paddingBottom: hp(1.8),
                        textAlign: "center",
                        fontFamily: "BricolageLight",
                        fontSize: 16,
                        letterSpacing: 0.5,
                    },
                },
                keyboard: {
                    paddingTop: hp(0.6),
                    paddingLeft: wp(4),
                    paddingRight: wp(4),
                    row: {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        keys: {
                            width: wp(20),
                            height: hp(10),
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            text: {
                                color: "#000000",
                                fontFamily: "BricolageLight",
                                fontSize: 30,
                            },
                        },
                    },
                },
                sendButtonDiv: {
                    flexDirection: "row",
                    paddingTop: hp(2.3),
                    paddingLeft: wp(2),
                    paddingRight: wp(2),
                    button: {
                        width: "100%",
                        height: 57,
                        borderRadius: 30,
                        backgroundColor: defaultAccentColor,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        text: {
                            color: "#ffffff",
                            fontFamily: "BricolageLight",
                            letterSpacing: 0.4,
                            fontSize: 19,
                        },
                    },
                },
            },
        },
    },
} as any);

export default ConfirmPinSheet;
