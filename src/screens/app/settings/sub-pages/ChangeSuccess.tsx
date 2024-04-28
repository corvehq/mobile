import {
    Platform,
    NativeModules,
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { transactionSuccessStyle } from "../../../../styles/homeStyle";
import { globalScrollViewStyle } from "../../../../styles/const";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
const StatusBarManager = NativeModules;

const ChangeSuccessScreen = () => {
    return (
        <SafeAreaView
            style={{
                ...styles.transactionSuccessScreen,
                paddingTop:
                    Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
            }}
        >
            <NavigationHeaderBar
                title="Password Changed"
                useCancel
                backAction="Settings"
            />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.transactionSuccessScreen.screenContent}>
                    <View
                        style={
                            styles.transactionSuccessScreen.screenContent
                                .imageDiv
                        }
                    >
                        <Image
                            source={require("../../../../assets/images/notifications/success.png")}
                            style={
                                styles.transactionSuccessScreen.screenContent
                                    .imageDiv.image
                            }
                        />
                    </View>
                    <View
                        style={
                            styles.transactionSuccessScreen.screenContent
                                .textDiv
                        }
                    >
                        <Text
                            style={
                                styles.transactionSuccessScreen.screenContent
                                    .textDiv.text
                            }
                        >
                            You're all set! Your password has been changed
                        </Text>
                    </View>
                    <View
                        style={
                            styles.transactionSuccessScreen.screenContent
                                .buttonDiv
                        }
                    >
                        <Pressable
                            style={
                                styles.transactionSuccessScreen.screenContent
                                    .buttonDiv.button
                            }
                        >
                            <Text
                                style={
                                    styles.transactionSuccessScreen
                                        .screenContent.buttonDiv.button.text
                                }
                            >
                                Okay, Thanks 😊
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(transactionSuccessStyle);

export default ChangeSuccessScreen;
