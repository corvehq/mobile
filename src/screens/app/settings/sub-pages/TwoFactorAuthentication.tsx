import {
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    defaultAccentColor,
    defaultAppGreen,
    globalScrollViewStyle,
} from "../../../../styles/const";
import { settingStyle } from "../../../../styles/homeStyle";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
import { TextInput } from "react-native-gesture-handler";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useState } from "react";
import { twoFAOptionList } from "../../../../data/twoFAOptionList";

const TwoFAScreen = () => {
    const [activeSelection, setActiveSelection] = useState("");

    return (
        <SafeAreaView
            style={{
                ...settingStyles.settingScreen,
                paddingTop: Platform.OS === "android" ? 5 : 0,
            }}
        >
            <NavigationHeaderBar title="Two-Factor Authentication" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={settingStyles.settingScreen.screenContent}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoContainer.text}>
                            This allows you to protect your account by creating
                            an additional layer of security to access something
                            that belongs to you.
                        </Text>
                    </View>
                    <View style={styles.accountInputContainer}>
                        {twoFAOptionList.map((option, index: number) => {
                            return (
                                <Pressable
                                    style={
                                        styles.accountInputContainer.checkBox
                                    }
                                    key={index}
                                    onPress={() =>
                                        setActiveSelection(option.value)
                                    }
                                >
                                    <Pressable
                                        style={
                                            styles.accountInputContainer
                                                .checkBox.check
                                        }
                                        onPress={() =>
                                            setActiveSelection(option.value)
                                        }
                                    >
                                        <Pressable
                                            style={
                                                option.value === activeSelection
                                                    ? styles
                                                          .accountInputContainer
                                                          .checkBox.check.active
                                                    : ""
                                            }
                                            onPress={() =>
                                                setActiveSelection(option.value)
                                            }
                                        ></Pressable>
                                    </Pressable>
                                    <Text
                                        style={
                                            styles.accountInputContainer
                                                .checkBox.text
                                        }
                                    >
                                        {option.title}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>
                    <View style={styles.buttonDiv}>
                        <Pressable style={styles.buttonDiv.button}>
                            <Text style={styles.buttonDiv.button.text}>
                                Allow Authentication
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        padding: 5,
        text: {
            fontFamily: "BricolageLight",
            letterSpacing: 0.3,
            fontSize: 17,
            lineHeight: 25,
            paddingLeft: 3,
            paddingRight: 3,
            color: "rgba(51, 51, 68, 1)",
        },
    },
    accountInputContainer: {
        padding: 15,
        paddingTop: 25,
        paddingBottom: 25,
        checkBox: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 10,
            paddingTop: 20,
            paddingBottom: 20,
            check: {
                width: 23,
                height: 23,
                borderRadius: 60,
                borderColor: defaultAccentColor,
                borderWidth: 1.2,
                padding: 3.5,
                active: {
                    width: "100%",
                    height: "100%",
                    borderRadius: 60,
                    backgroundColor: defaultAccentColor,
                },
            },
            text: {
                fontFamily: "BricolageLight",
                fontSize: 16.5,
                letterSpacing: 0.3,
                color: "rgba(0,0,0,0.75)",
                lineHeight: 23,
            },
        },
    },
    buttonDiv: {
        padding: 8,
        paddingTop: hp(5),
        button: {
            height: 58,
            borderRadius: 11,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: defaultAccentColor,
            text: {
                color: "#ffffff",
                fontSize: 18,
                letterSpacing: 0.5,
                fontFamily: "BricolageLight",
            },
        },
    },
} as any);
const settingStyles = StyleSheet.create(settingStyle);

export default TwoFAScreen;
