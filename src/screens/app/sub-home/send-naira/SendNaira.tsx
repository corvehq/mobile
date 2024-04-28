import {
    Platform,
    NativeModules,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sendNairaStyle } from "../../../../styles/homeStyle";
import {
    globalFullButtonStyle,
    globalScrollViewStyle,
} from "../../../../styles/const";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
import BeneficiariesScroll from "../../../../components/sections/BeneficiairiesScroll";
import { useRef, useState } from "react";
import SelectBankSheet from "../../../../components/bottomsheet/SelectBankSheet";
import { useNavigation } from "@react-navigation/native";
import { BankListTypes, Nav } from "../../../../utils/types";
import { toastNotification } from "../../../../utils/toast";
import { formatter } from "../../../../utils/formatCurrency";
const StatusBarManager = NativeModules;

const SendNairaScreen = () => {
    const selectBankSheet = useRef<any>();
    const [selectedBank, setSelectedBank] = useState<BankListTypes | null>(
        null,
    );
    const [amount, setAmount] = useState<string>("");
    const [accountNumber, setAccountNumber] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const { navigate } = useNavigation<Nav>();

    const verifyDetailsAndProceed = () => {
        if (
            selectedBank === null ||
            amount === "" ||
            description === "" ||
            accountNumber === ""
        ) {
            toastNotification(
                "error",
                "Missing field",
                "A required field is empty",
            );
            return;
        }
        navigate("ConfirmTransfer", {
            data: {
                selectedBank,
                amount,
                description,
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
            <NavigationHeaderBar title="Send Money" />
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
                                ₦3,000,000
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
                                Bank
                            </Text>
                            <Pressable
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.pressableField
                                }
                                onPress={() => selectBankSheet.current.open()}
                            >
                                {selectedBank === null ? (
                                    <Image
                                        source={require("../../../../assets/images/avatars/man1.png")}
                                        style={
                                            styles.sendNairaScreen.screenContent
                                                .inputDiv.pressableField.image
                                        }
                                    />
                                ) : (
                                    <Image
                                        source={{ uri: selectedBank.logo }}
                                        style={
                                            styles.sendNairaScreen.screenContent
                                                .inputDiv.pressableField.image
                                        }
                                    />
                                )}
                                {selectedBank === null ? (
                                    <Text
                                        style={
                                            styles.sendNairaScreen.screenContent
                                                .inputDiv.pressableField.text
                                        }
                                    >
                                        Select Bank
                                    </Text>
                                ) : (
                                    <Text
                                        style={
                                            styles.sendNairaScreen.screenContent
                                                .inputDiv.pressableField
                                                .activeText
                                        }
                                    >
                                        {selectedBank.name}
                                    </Text>
                                )}
                            </Pressable>
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
                                Account Number
                            </Text>
                            <TextInput
                                placeholder="Account Number"
                                placeholderTextColor="rgba(22,35,2,0.35)"
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .inputDiv.customInput
                                }
                                value={accountNumber}
                                onChangeText={(e) => setAccountNumber(e)}
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
            <SelectBankSheet
                selectBankSheet={selectBankSheet}
                setSelectedBank={setSelectedBank}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(sendNairaStyle);

export default SendNairaScreen;
