import {
    Image,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalScrollViewStyle } from "../../../styles/const";
import { billScreenStyle } from "../../../styles/homeStyle";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
import { useRef, useState } from "react";
import PaymentOptionSheet from "../../../components/bottomsheet/PaymentOptionSheet";
import RecentElectricityScroll from "../../../components/sections/RecentElectricityScroll";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";
import ElectricityDistributorSheet from "../../../components/bottomsheet/ElectricityDistributorSheet";
import SelectMTSheet from "../../../components/bottomsheet/SelectMTSheet";
import { toastNotification } from "../../../utils/toast";
import { formatter } from "../../../utils/formatCurrency";

const BuyElectricityScreen = () => {
    const edSheet: any = useRef();
    const selectMTSheet: any = useRef();
    const paymentOptionSheet: any = useRef();
    const [selectedED, setSelectedED] = useState<any>({});
    const [selectedMT, setSelectedMT] = useState<string>("");
    const [metreNumber, setMetreNumber] = useState<string>("");
    const [amount, setAmount] = useState("");

    const updateAmount = (e: any) => {
        setAmount(e);
    };

    const verifyDetailsAndProceed = () => {
        if (selectedMT === "" || metreNumber === "" || amount === "") {
            toastNotification(
                "error",
                "Missing field",
                "A required field is empty",
            );
            return;
        }
        paymentOptionSheet.current.open();
    };

    return (
        <SafeAreaView
            style={{
                ...styles.billScreen,
                paddingTop: Platform.OS === "android" ? 5 : 0,
            }}
        >
            <NavigationHeaderBar title="Buy Electricity" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.billScreen.screenContent}>
                    <RecentElectricityScroll />

                    <View style={styles.billScreen.screenContent.formContent}>
                        <View
                            style={
                                styles.billScreen.screenContent.formContent
                                    .inputDiv
                            }
                        >
                            <Text
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .label
                                }
                            >
                                Electricity Distributor
                            </Text>
                            <View
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .selectInputView
                                }
                            >
                                <Pressable
                                    style={
                                        styles.billScreen.screenContent
                                            .formContent.selectInputView
                                            .selectInput
                                    }
                                    onPress={() => edSheet.current.open()}
                                >
                                    <Image
                                        source={
                                            selectedED.distributorImage
                                                ? selectedED.distributorImage
                                                : require("../../../assets/images/utilities/ekedc.png")
                                        }
                                        style={
                                            styles.billScreen.screenContent
                                                .formContent.selectInputView
                                                .selectInput.image
                                        }
                                        resizeMode="center"
                                    />
                                    <Text
                                        style={
                                            !selectedED.distributorID
                                                ? styles.billScreen
                                                      .screenContent.formContent
                                                      .selectInputView
                                                      .selectInput.text
                                                : {
                                                      ...styles.billScreen
                                                          .screenContent
                                                          .formContent
                                                          .selectInputView
                                                          .selectInput.text,
                                                      color: "#000000",
                                                      fontSize: 16.5,
                                                  }
                                        }
                                    >
                                        {selectedED.distributorID
                                            ? selectedED.distributorID.toUpperCase()
                                            : `Electricity Distributor`}
                                    </Text>
                                    <Pressable
                                        style={{ marginLeft: "auto" }}
                                        onPress={() => edSheet.current.open()}
                                    >
                                        <ChevronDownIcon />
                                    </Pressable>
                                </Pressable>
                            </View>
                        </View>

                        <View
                            style={
                                styles.billScreen.screenContent.formContent
                                    .inputDiv
                            }
                        >
                            <Text
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .label
                                }
                            >
                                Select Metre Type
                            </Text>
                            <View
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .selectInputView
                                }
                            >
                                <Pressable
                                    style={
                                        styles.billScreen.screenContent
                                            .formContent.selectInputView
                                            .selectInput
                                    }
                                    onPress={() => selectMTSheet.current.open()}
                                >
                                    <Text
                                        style={
                                            selectedMT === ""
                                                ? styles.billScreen
                                                      .screenContent.formContent
                                                      .selectInputView
                                                      .selectInput.text
                                                : {
                                                      ...styles.billScreen
                                                          .screenContent
                                                          .formContent
                                                          .selectInputView
                                                          .selectInput.text,
                                                      color: "#000000",
                                                      fontSize: 16.5,
                                                      textTransform:
                                                          "capitalize",
                                                  }
                                        }
                                    >
                                        {selectedMT !== ""
                                            ? selectedMT
                                            : ` Select Metre Type`}
                                    </Text>
                                    <Pressable
                                        style={{ marginLeft: "auto" }}
                                        onPress={() =>
                                            selectMTSheet.current.open()
                                        }
                                    >
                                        <ChevronDownIcon />
                                    </Pressable>
                                </Pressable>
                            </View>
                        </View>

                        <View
                            style={
                                styles.billScreen.screenContent.formContent
                                    .inputDiv
                            }
                        >
                            <Text
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .label
                                }
                            >
                                Metre Number
                            </Text>
                            <TextInput
                                value={metreNumber}
                                onChangeText={(e) => setMetreNumber(e)}
                                placeholder="7043306040"
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .input
                                }
                            />
                        </View>

                        <View
                            style={
                                styles.billScreen.screenContent.formContent
                                    .inputDiv
                            }
                        >
                            <Text
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .label
                                }
                            >
                                Amount
                            </Text>
                            <TextInput
                                placeholder="Amount"
                                value={amount}
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .input
                                }
                                onChangeText={(e) => updateAmount(e)}
                            />
                        </View>

                        <View
                            style={
                                styles.billScreen.screenContent.formContent
                                    .buttonDiv
                            }
                        >
                            <Pressable
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .buttonDiv.button
                                }
                                onPress={verifyDetailsAndProceed}
                            >
                                <Text
                                    style={
                                        styles.billScreen.screenContent
                                            .formContent.buttonDiv.button.text
                                    }
                                >
                                    Pay
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <ElectricityDistributorSheet
                edSheet={edSheet}
                setSelectedED={setSelectedED}
            />
            <PaymentOptionSheet
                paymentOptionSheet={paymentOptionSheet}
                data={{
                    selectedContact: metreNumber,
                    network: selectedED.distributorID,
                    amount,
                    transaction: "Electricity",
                    successComponent: `<p style='padding-left: 40; padding-right: 40; text-align: center; font-family: BricolageLight; letter-spacing: 0.2; color: rgba(0,0,0,0.75); line-height: 25;
                    font-size: 20px;'>You have successfully recharged Metre number: <strong>${metreNumber}</strong> with <strong>${formatter.format(parseInt(amount))}</strong></p>`,
                }}
            />
            <SelectMTSheet
                setSelectedMT={setSelectedMT}
                selectMTSheet={selectMTSheet}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(billScreenStyle);

export default BuyElectricityScreen;
