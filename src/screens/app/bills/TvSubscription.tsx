import {
    Image,
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
    globalFullButtonStyle,
    globalScrollViewStyle,
} from "../../../styles/const";
import { billScreenStyle } from "../../../styles/homeStyle";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
import { useRef, useState } from "react";
import PaymentOptionSheet from "../../../components/bottomsheet/PaymentOptionSheet";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";
import { NewPlan, RenewPlan } from "./components/TVPlans";
import SelectTVSheet from "../../../components/bottomsheet/SelectTVSheet";
import RecentTVScroll from "../../../components/sections/RecentTVScroll";
import { toastNotification } from "../../../utils/toast";

const TvSubscriptionScreen = () => {
    const tvSheet: any = useRef();
    const paymentOptionSheet: any = useRef();
    const [selectedTV, setSelectedTV] = useState<any>({});
    const [activeTab, setActiveTab] = useState("");
    const [amount, setAmount] = useState("");
    const [decoderNumber, setDecoderNumber] = useState("");
    const [selectedPlan, setSelectedPlan] = useState<any>({});

    const verifyDetailsAndProceed = () => {
        if (
            Object.entries(selectedTV).length === 0 ||
            decoderNumber === "" ||
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
            <NavigationHeaderBar title="TV Subscription" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.billScreen.screenContent}>
                    <RecentTVScroll fillDetailsWithRecent={() => {}} />

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
                                Select TV
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
                                    onPress={() => tvSheet.current.open()}
                                >
                                    <Image
                                        source={
                                            selectedTV.image
                                                ? selectedTV.image
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
                                            !selectedTV.title
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
                                        {selectedTV.title
                                            ? selectedTV.title
                                            : `Select TV`}
                                    </Text>
                                    <Pressable
                                        style={{ marginLeft: "auto" }}
                                        onPress={() => tvSheet.current.open()}
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
                                What do you want to do?
                            </Text>

                            <View
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .tabDiv
                                }
                            >
                                <Pressable
                                    onPress={() => setActiveTab("renew-plan")}
                                    style={
                                        activeTab !== "renew-plan"
                                            ? styles.billScreen.screenContent
                                                  .formContent.tabDiv.button
                                            : {
                                                  ...styles.billScreen
                                                      .screenContent.formContent
                                                      .tabDiv.button,
                                                  borderColor:
                                                      defaultAccentColor,
                                              }
                                    }
                                >
                                    <Text
                                        style={
                                            styles.billScreen.screenContent
                                                .formContent.tabDiv.button.text
                                        }
                                    >
                                        Renew plan
                                    </Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => setActiveTab("new-plan")}
                                    style={
                                        activeTab !== "new-plan"
                                            ? styles.billScreen.screenContent
                                                  .formContent.tabDiv.button
                                            : {
                                                  ...styles.billScreen
                                                      .screenContent.formContent
                                                      .tabDiv.button,
                                                  borderColor:
                                                      defaultAccentColor,
                                              }
                                    }
                                >
                                    <Text
                                        style={
                                            styles.billScreen.screenContent
                                                .formContent.tabDiv.button.text
                                        }
                                    >
                                        Subscribe new plan
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        {activeTab === "renew-plan" && (
                            <RenewPlan
                                decoderNumber={decoderNumber}
                                setDecoderNumber={setDecoderNumber}
                                amount={amount}
                                setAmount={setAmount}
                            />
                        )}
                        {activeTab === "new-plan" && (
                            <NewPlan
                                decoderNumber={decoderNumber}
                                setDecoderNumber={setDecoderNumber}
                                amount={amount}
                                setAmount={setAmount}
                                planList={selectedTV.plans}
                                selectedPlan={selectedPlan}
                                setSelectedPlan={setSelectedPlan}
                            />
                        )}

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
            <SelectTVSheet tvSheet={tvSheet} setSelectedTV={setSelectedTV} />
            <PaymentOptionSheet
                paymentOptionSheet={paymentOptionSheet}
                data={{
                    selectedContact: decoderNumber,
                    network: selectedTV.title,
                    amount,
                    transaction: "Tv Subscription",
                    successComponent: `<p style='padding-left: 40; padding-right: 40; text-align: center; font-family: BricolageLight; letter-spacing: 0.2; color: rgba(0,0,0,0.75); line-height: 25;
                    font-size: 20px;'>You have successfully subscribed <strong>${selectedPlan.title ? selectedPlan.title : ""}</strong> on decoder <strong>${decoderNumber}</strong></p>`,
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(billScreenStyle);

export default TvSubscriptionScreen;
