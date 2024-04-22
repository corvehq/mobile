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
import { globalScrollViewStyle } from "../../../../styles/const";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
import BeneficiariesScroll from "../../../../components/sections/BeneficiairiesScroll";
import { useRef, useState } from "react";
import SelectBankSheet from "../../../../components/bottomsheet/SelectBankSheet";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../../../../utils/types";
import { toastNotification } from "../../../../utils/toast";
const StatusBarManager = NativeModules;

const SendNairaScreen = () => {
    const selectBankSheet: any = useRef();
    const [selectedBank, setSelectedBank] = useState<any>(null);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const { navigate } = useNavigation<Nav>();

    const verifyDetailsAndProceed = () => {
        if (selectedBank === null || amount === "" || description === "") {
            toastNotification(
                "error",
                "Missing field",
                "A required field is empty"
            );
            return;
        }
        navigate("ConfirmTransfer", {
            data: {
                selectedBank,
                amount,
                description,
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
                                style={
                                    styles.sendNairaScreen.screenContent
                                        .buttonDiv.button
                                }
                                onPress={verifyDetailsAndProceed}
                            >
                                <Text
                                    style={
                                        styles.sendNairaScreen.screenContent
                                            .buttonDiv.button.text
                                    }
                                >
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
