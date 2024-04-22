import {
    Platform,
    NativeModules,
    ScrollView,
    Text,
    View,
    StyleSheet,
    Pressable,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalScrollViewStyle } from "../../../styles/const";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
import { qrCodeStyle } from "../../../styles/homeStyle";
import ButtonShareIcon from "../../../assets/icons/ButtonShareIcon";
import ButtonScanIcon from "../../../assets/icons/ButtonScanIcon";
const StatusBarManager = NativeModules;

const QRCodeScreen = () => {
    return (
        <SafeAreaView
            style={{
                ...styles.qrCodeScreen,
                paddingTop:
                    Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
            }}
        >
            <NavigationHeaderBar title="QR Code" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.qrCodeScreen.screenContent}>
                    <Text style={styles.qrCodeScreen.screenContent.titleText}>
                        Scan QRCode for payment
                    </Text>
                    <View style={styles.qrCodeScreen.screenContent.imageDiv}>
                        <Image
                            source={require("../../../assets/images/misc/qr-code.png")}
                            style={
                                styles.qrCodeScreen.screenContent.imageDiv.image
                            }
                        />
                    </View>
                    <View
                        style={
                            styles.qrCodeScreen.screenContent
                                .paymentDetailsContent
                        }
                    >
                        <Text
                            style={
                                styles.qrCodeScreen.screenContent
                                    .paymentDetailsContent.titleText
                            }
                        >
                            Payment Link
                        </Text>
                        <Pressable
                            style={
                                styles.qrCodeScreen.screenContent
                                    .paymentDetailsContent.addressContent
                            }
                        >
                            <Text
                                style={
                                    styles.qrCodeScreen.screenContent
                                        .paymentDetailsContent.addressContent
                                        .text
                                }
                            >
                                0xjhkbjkfdshuihriuerAJKAJK
                            </Text>
                            <Pressable
                                style={
                                    styles.qrCodeScreen.screenContent
                                        .paymentDetailsContent.addressContent
                                        .button
                                }
                            >
                                <Text
                                    style={
                                        styles.qrCodeScreen.screenContent
                                            .paymentDetailsContent
                                            .addressContent.button.text
                                    }
                                >
                                    Copy
                                </Text>
                            </Pressable>
                        </Pressable>
                    </View>
                    <View style={styles.qrCodeScreen.screenContent.buttonsDiv}>
                        <Pressable
                            style={
                                styles.qrCodeScreen.screenContent.buttonsDiv
                                    .firstButton
                            }
                        >
                            <ButtonShareIcon />
                            <Text
                                style={
                                    styles.qrCodeScreen.screenContent.buttonsDiv
                                        .firstButton.text
                                }
                            >
                                Share
                            </Text>
                        </Pressable>
                        <Pressable
                            style={
                                styles.qrCodeScreen.screenContent.buttonsDiv
                                    .secondButton
                            }
                        >
                            <ButtonScanIcon
                                size={{ width: "23", height: "23" }}
                            />
                            <Text
                                style={
                                    styles.qrCodeScreen.screenContent.buttonsDiv
                                        .secondButton.text
                                }
                            >
                                Request Payment
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(qrCodeStyle);

export default QRCodeScreen;
