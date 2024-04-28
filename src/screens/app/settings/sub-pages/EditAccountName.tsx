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

const EditNameScreen = () => {
    return (
        <SafeAreaView
            style={{
                ...settingStyles.settingScreen,
                paddingTop: Platform.OS === "android" ? 5 : 0,
            }}
        >
            <NavigationHeaderBar title="Your Name" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={settingStyles.settingScreen.screenContent}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoContainer.text}>
                            This should be your full legal name as it appears on
                            all your documents.
                        </Text>
                    </View>
                    <View style={styles.accountInputContainer}>
                        <View style={styles.accountInputContainer.inputDiv}>
                            <Text style={styles.accountInputContainer.label}>
                                First Name
                            </Text>
                            <TextInput
                                placeholder="Your First Name"
                                value="David"
                                style={styles.accountInputContainer.input}
                            />
                        </View>

                        <View style={styles.accountInputContainer.inputDiv}>
                            <Text style={styles.accountInputContainer.label}>
                                Other Names
                            </Text>
                            <TextInput
                                placeholder="Your Other Names"
                                value="Chikabadu"
                                style={styles.accountInputContainer.input}
                            />
                        </View>

                        <View style={styles.accountInputContainer.inputDiv}>
                            <Text style={styles.accountInputContainer.label}>
                                Last Name
                            </Text>
                            <TextInput
                                placeholder="Your Last Name"
                                value="Ogwu-Nelson"
                                style={styles.accountInputContainer.input}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonDiv}>
                        <Pressable style={styles.buttonDiv.button}>
                            <Text style={styles.buttonDiv.button.text}>
                                Submit
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
        text: {
            fontFamily: "BricolageLight",
            letterSpacing: 0.3,
            fontSize: 20,
            lineHeight: 32,
            paddingLeft: 3,
            paddingRight: 3,
            color: "rgba(51, 51, 68, 1)",
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
            borderWidth: 1.3,
            borderColor: "rgba(0,0,0,0.1)",
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

export default EditNameScreen;
