import {
    Platform,
    NativeModules,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sendNairaStyle } from "../../../../styles/homeStyle";
import {
    globalFullButtonStyle,
    globalScrollViewStyle,
} from "../../../../styles/const";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
import BeneficiariesScroll from "../../../../components/sections/BeneficiairiesScroll";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../../../../utils/types";
import { toastNotification } from "../../../../utils/toast";
import ENairaIcon from "../../../../assets/icons/ENairaIcon";
import { formatter } from "../../../../utils/formatCurrency";
const StatusBarManager = NativeModules;

const SendENairaScreen = () => {
    const [sendTo, setSendTo] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const { navigate } = useNavigation<Nav>();

    const verifyDetailsAndProceed = () => {
        if (sendTo === "" || amount === "" || description === "") {
            toastNotification(
                "error",
                "Missing field",
                "A required field is empty",
            );
            return;
        }
        navigate("ConfirmTransfer", {
            data: {
                sendTo,
                amount,
                description,
                type: "crypto",
                successComponent: `<p style='padding-left: 40; padding-right: 40; text-align: center; font-family: BricolageLight; letter-spacing: 0.2; color: rgba(0,0,0,0.75); line-height: 25;
                font-size: 20px;'>Your transfer of <strong>${formatter.format(parseInt(amount))}</strong> to <strong>NELSON DAVID</strong> was successful</p>`,
            },
        });
    };

    return (
        <SafeAreaView
            style={{
                ...styles.sendNairaScreen,
                paddingTop:
                    Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
            }}
        >
            <NavigationHeaderBar title="Send eNaira" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.sendNairaScreen.screenContent}>
                    <View
                        style={
                            styles.sendNairaScreen.screenContent.currentBalance
                        }
                    >
                        <Text
                            style={
                                styles.sendNairaScreen.screenContent
                                    .currentBalance.text
                            }
                        >
                            Current Balance:{" "}
                            <Text
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .currentBalance.amountText
                                }
                            >
                                <ENairaIcon /> 3,000,000
                            </Text>
                        </Text>
                    </View>
                    <BeneficiariesScroll />
                    <View>
                        <View
                            style={
                                styles.sendNairaScreen.screenContent.inputDiv
                            }
                        >
                            <Text
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.label
                                }
                            >
                                From
                            </Text>
                            <TextInput
                                placeholder=""
                                placeholderTextColor="rgba(22,35,2,0.35)"
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.customInput
                                }
                                value="0xbbb9...s8s0"
                            />
                        </View>
                        <View
                            style={
                                styles.sendNairaScreen.screenContent.inputDiv
                            }
                        >
                            <Text
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.label
                                }
                            >
                                To
                            </Text>
                            <TextInput
                                placeholder="Input public address (0x)"
                                placeholderTextColor="rgba(22,35,2,0.35)"
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.customInput
                                }
                                value={sendTo}
                                onChangeText={(e) => setSendTo(e)}
                            />
                        </View>
                        <View
                            style={
                                styles.sendNairaScreen.screenContent.inputDiv
                            }
                        >
                            <Text
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.label
                                }
                            >
                                Amount
                            </Text>
                            <TextInput
                                placeholder="10,000"
                                placeholderTextColor="rgba(22,35,2,0.35)"
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.customInput
                                }
                                value={amount}
                                onChangeText={(e) => setAmount(e)}
                                keyboardType="numeric"
                            />
                        </View>
                        <View
                            style={
                                styles.sendNairaScreen.screenContent.inputDiv
                            }
                        >
                            <Text
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.label
                                }
                            >
                                Description
                            </Text>
                            <TextInput
                                placeholder="Weekend Shutdown 🤑"
                                placeholderTextColor="rgba(22,35,2,0.35)"
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.customInput
                                }
                                value={description}
                                onChangeText={(e) => setDescription(e)}
                            />
                        </View>
                        <View
                            style={
                                styles.sendNairaScreen.screenContent.buttonDiv
                            }
                        >
                            <Pressable
                                style={globalFullButtonStyle}
                                onPress={verifyDetailsAndProceed}
                            >
                                <Text style={globalFullButtonStyle.text}>
                                    Next
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(sendNairaStyle);

export default SendENairaScreen;
