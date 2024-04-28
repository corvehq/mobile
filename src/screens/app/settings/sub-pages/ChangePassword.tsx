import {
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
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
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../../../../utils/types";
import { toastNotification } from "../../../../utils/toast";

const ChangePasswordScreen = () => {
    const { navigate } = useNavigation<Nav>();
    const [otp, setOtp] = useState("");

    const onSubmit = () => {
        if (otp === "1234") {
            navigate("EnterNewPassword");
            return;
        }
        toastNotification(
            "error",
            "Incorrect OTP Code",
            "The OTP code entered is incorrect"
        );
    };

    return (
        <SafeAreaView
            style={{
                ...settingStyles.settingScreen,
                paddingTop: Platform.OS === "android" ? 5 : 0,
            }}
        >
            <NavigationHeaderBar title="Change Password" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={settingStyles.settingScreen.screenContent}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoContainer.titleText}>
                            Enter Code
                        </Text>
                        <Text style={styles.infoContainer.text}>
                            A verification code has been sent to +23490*****621
                        </Text>
                    </View>
                    <View style={styles.accountInputContainer}>
                        <TextInput
                            style={{
                                ...styles.accountInputContainer.input,
                                textAlign: "center",
                                marginTop: 40,
                                letterSpacing: 40,
                            }}
                            keyboardType="number-pad"
                            value={otp}
                            onChangeText={(e) => setOtp(e)}
                        />
                        <Text
                            style={{
                                fontFamily: "BricolageLight",
                                textAlign: "center",
                                paddingTop: 60,
                                paddingBottom: 50,
                                color: "rgba(124, 124, 136, 1)",
                                fontSize: 16,
                                letterSpacing: -0.1,
                            }}
                        >
                            Didn’t receieve code? Resend in (58s)
                        </Text>
                    </View>

                    <View style={styles.buttonDiv}>
                        <Pressable
                            style={styles.buttonDiv.button}
                            onPress={onSubmit}
                        >
                            <Text style={styles.buttonDiv.button.text}>
                                Continue
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
        padding: 10,
        titleText: {
            fontFamily: "BricolageLight",
            letterSpacing: 0.4,
            paddingBottom: 4,
            fontSize: 25,
            lineHeight: 32,
            paddingLeft: 3,
            paddingRight: 3,
            color: "rgba(0, 0, 0, 1)",
        },
        text: {
            fontFamily: "BricolageLight",
            letterSpacing: 0.3,
            fontSize: 19,
            lineHeight: 30,
            paddingTop: 5,
            paddingLeft: 3,
            paddingRight: 3,
            paddingBottom: 4,
            color: "rgba(51, 51, 68, 0.85)",
        },
    },
    accountInputContainer: {
        padding: 10,
        inputDiv: {
            paddingTop: hp(1.7),
            paddingBottom: hp(1.7),
        },
        label: {
            fontFamily: "BricolageLight",
            letterSpacing: 0.5,
            paddingTop: hp(0.5),
            paddingBottom: hp(0.5),
            paddingLeft: wp(0.5),
            paddingRight: wp(0.5),
            fontSize: 17,
            color: defaultAppGreen,
        },
        input: {
            height: 60,
            borderWidth: 1.5,
            borderColor: "rgba(0,0,0,0.05)",
            borderRadius: 10,
            paddingLeft: wp(3),
            paddingRight: wp(3),
            fontFamily: "BricolageLight",
            letterSpacing: 0.4,
            fontSize: 18,
        },
    },
    buttonDiv: {
        padding: 5,
        paddingTop: hp(5),
        button: {
            height: 56,
            borderRadius: 11,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: defaultAccentColor,
            text: {
                color: "#ffffff",
                fontSize: 20,
                letterSpacing: 0.5,
                fontFamily: "BricolageLight",
            },
        },
    },
} as any);
const settingStyles = StyleSheet.create(settingStyle);

export default ChangePasswordScreen;
