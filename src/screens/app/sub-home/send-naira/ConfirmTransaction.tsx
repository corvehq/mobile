import {
    Platform,
    NativeModules,
    ScrollView,
    StyleSheet,
    View,
    Pressable,
    Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { confirmTransactionStyle } from "../../../../styles/homeStyle";
import { globalScrollViewStyle } from "../../../../styles/const";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
import { useState } from "react";
import * as Haptics from "expo-haptics";
import CircleCloseIcon from "../../../../assets/icons/CircleCloseIcon";
const StatusBarManager = NativeModules;

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
};

const ConfirmTransactionScreen = () => {
    const [pinText, setPinText] = useState("");
    const [asteriskPin, setAsteriskPin] = useState("");

    const keyboardInput = (value: string) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

        if (pinText === "") {
            setPinText(value);
            setAsteriskPin("*");
        } else {
            setPinText(pinText + value);
            setAsteriskPin(asteriskPin + "*");
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
        if (pinText === "0") {
            console.log("CAN'T PROCEED");
            return;
        }
        console.log("PIN: ", pinText);
    };

    return (
        <SafeAreaView
            style={{
                ...styles.confirmTransactionScreen,
                paddingTop:
                    Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
            }}
        >
            <NavigationHeaderBar title="Confirm Transaction" />
            <ScrollView style={globalScrollViewStyle}>
                <View
                    style={styles.confirmTransactionScreen.screenContent}
                ></View>
            </ScrollView>
            <View
                style={
                    styles.confirmTransactionScreen.screenContent.keyboardDiv
                }
            >
                <View
                    style={
                        styles.confirmTransactionScreen.screenContent
                            .keyboardDiv.textDiv
                    }
                >
                    <Text
                        style={
                            styles.confirmTransactionScreen.screenContent
                                .keyboardDiv.textDiv.amount
                        }
                    >
                        {asteriskPin}
                    </Text>
                </View>
                <View
                    style={
                        styles.confirmTransactionScreen.screenContent
                            .keyboardDiv.keyboard
                    }
                >
                    <View
                        style={
                            styles.confirmTransactionScreen.screenContent
                                .keyboardDiv.keyboard.row
                        }
                    >
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("1")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                1
                            </Text>
                        </Pressable>
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("2")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                2
                            </Text>
                        </Pressable>
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("3")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                3
                            </Text>
                        </Pressable>
                    </View>
                    <View
                        style={
                            styles.confirmTransactionScreen.screenContent
                                .keyboardDiv.keyboard.row
                        }
                    >
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("4")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                4
                            </Text>
                        </Pressable>
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("5")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                5
                            </Text>
                        </Pressable>
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("6")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                6
                            </Text>
                        </Pressable>
                    </View>
                    <View
                        style={
                            styles.confirmTransactionScreen.screenContent
                                .keyboardDiv.keyboard.row
                        }
                    >
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("7")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                7
                            </Text>
                        </Pressable>
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("8")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                8
                            </Text>
                        </Pressable>
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("9")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                9
                            </Text>
                        </Pressable>
                    </View>
                    <View
                        style={{
                            ...styles.confirmTransactionScreen.screenContent
                                .keyboardDiv.keyboard.row,
                            justifyContent: "flex-end",
                            gap: 25,
                        }}
                    >
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={() => keyboardInput("0")}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                0
                            </Text>
                        </Pressable>
                        <Pressable
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.keyboard.row.keys
                            }
                            onPress={deleteInput}
                            onLongPress={clearInput}
                        >
                            <Text
                                style={
                                    styles.confirmTransactionScreen
                                        .screenContent.keyboardDiv.keyboard.row
                                        .keys.text
                                }
                            >
                                <CircleCloseIcon />
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View
                    style={
                        styles.confirmTransactionScreen.screenContent
                            .keyboardDiv.sendButtonDiv
                    }
                >
                    <Pressable
                        style={
                            styles.confirmTransactionScreen.screenContent
                                .keyboardDiv.sendButtonDiv.button
                        }
                        onPress={proceedToSend}
                    >
                        <Text
                            style={
                                styles.confirmTransactionScreen.screenContent
                                    .keyboardDiv.sendButtonDiv.button.text
                            }
                        >
                            Send Money
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(confirmTransactionStyle);

export default ConfirmTransactionScreen;
