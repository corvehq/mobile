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
import {
    globalFullButtonStyle,
    globalScrollViewStyle,
} from "../../../styles/const";
import { billScreenStyle } from "../../../styles/homeStyle";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
import { useRef, useState } from "react";
import PaymentOptionSheet from "../../../components/bottomsheet/PaymentOptionSheet";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";
import InternetProviderSheet from "../../../components/bottomsheet/InternetProviderSheet";
import InternetPlanSheet from "../../../components/bottomsheet/InternetPlanSheet";
import { toastNotification } from "../../../utils/toast";
import RecentInternetScroll from "../../../components/sections/RecentInternetScroll";
import { internetData } from "../../../data/internetData";

const InternetScreen = () => {
    const ipSheet: any = useRef();
    const selectPlanSheet: any = useRef();
    const paymentOptionSheet: any = useRef();
    const [selectedIP, setSelectedIP] = useState<any>({});
    const [selectedPlan, setSelectedPlan] = useState<any>({});
    const [accountID, setAccountID] = useState<string>("");
    const [amount, setAmount] = useState<string>("");

    const fillDetailsWithRecent = (details: any) => {
        internetData.map((dt: any) => {
            if (dt.title.toLowerCase() === details.provider) {
                setSelectedIP(dt);
                setAccountID(details.accountId);
            }
        });
    };

    const verifyDetailsAndProceed = () => {
        if (
            Object.entries(selectedIP).length === 0 ||
            Object.entries(selectedPlan).length === 0 ||
            accountID === "" ||
            amount === ""
        ) {
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
            <NavigationHeaderBar title="Internet Subscription" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.billScreen.screenContent}>
                    <RecentInternetScroll
                        fillDetailsWithRecent={fillDetailsWithRecent}
                    />

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
                                Select Internet Provider
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
                                    onPress={() => ipSheet.current.open()}
                                >
                                    <Image
                                        source={
                                            selectedIP.image
                                                ? selectedIP.image
                                                : require("../../../assets/images/utilities/spectranet.png")
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
                                            !selectedIP.title
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
                                        {selectedIP.title
                                            ? selectedIP.title
                                            : `Select Internet Provider`}
                                    </Text>
                                    <Pressable
                                        style={{ marginLeft: "auto" }}
                                        onPress={() => ipSheet.current.open()}
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
                                Account ID
                            </Text>
                            <TextInput
                                placeholder="Account ID"
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .input
                                }
                                value={accountID}
                                onChangeText={(e) => setAccountID(e)}
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
                                Select Plan
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
                                    onPress={
                                        selectedIP.title
                                            ? () =>
                                                  selectPlanSheet.current.open()
                                            : () =>
                                                  toastNotification(
                                                      "error",
                                                      "Select internet provider",
                                                      "Select internet provider to proceed",
                                                  )
                                    }
                                >
                                    <Text
                                        style={
                                            !selectedPlan.title
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
                                        {selectedPlan.title
                                            ? selectedPlan.title
                                            : ` Select Plan`}
                                    </Text>
                                    <Pressable
                                        style={{ marginLeft: "auto" }}
                                        onPress={
                                            selectedIP.title
                                                ? () =>
                                                      selectPlanSheet.current.open()
                                                : () => {}
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
                                    .buttonDiv
                            }
                        >
                            <Pressable
                                style={globalFullButtonStyle}
                                onPress={verifyDetailsAndProceed}
                            >
                                <Text style={globalFullButtonStyle.text}>
                                    Pay
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <InternetProviderSheet
                ipSheet={ipSheet}
                setSelectedIP={setSelectedIP}
            />
            <InternetPlanSheet
                planList={selectedIP.plans ? selectedIP.plans : []}
                selectPlanSheet={selectPlanSheet}
                setSelectedPlan={setSelectedPlan}
                setAmount={setAmount}
            />
            <PaymentOptionSheet
                paymentOptionSheet={paymentOptionSheet}
                data={{
                    selectedContact: accountID,
                    network: selectedIP.title,
                    amount,
                    transaction: "Internet Subscription",
                    successComponent: `<p style='padding-left: 40; padding-right: 40; text-align: center; font-family: BricolageLight; letter-spacing: 0.2; color: rgba(0,0,0,0.75); line-height: 25;
                font-size: 20px;'>You have successfully subscribed <strong>${selectedPlan.title ? selectedPlan.title : ""}</strong> on this account: <strong>${accountID}</strong></p>`,
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(billScreenStyle);

export default InternetScreen;
