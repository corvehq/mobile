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
import * as Contacts from "expo-contacts";
import { useRef, useState } from "react";
import ContactListSheet from "../../../components/bottomsheet/ContactListSheet";
import { networkList } from "../../../data/networkList";
import RecentAirtimeScroll from "../../../components/sections/RecentAirtimeScroll";
import PaymentOptionSheet from "../../../components/bottomsheet/PaymentOptionSheet";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";
import SelectDataPlanSheet from "../../../components/bottomsheet/SelectDataPlanSheet";
import { dataPlanList } from "../../../data/dataPlanList";
import { toastNotification } from "../../../utils/toast";

const BuyDataScreen = () => {
    const contactListSheet: any = useRef();
    const paymentOptionSheet: any = useRef();
    const selectPlanSheet: any = useRef();
    const [selectedContact, setSelectedContact] = useState<string>("");
    const [contacts, setContacts] = useState<any[]>([]);
    const [network, setNetwork] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [selectedPlan, setSelectedPlan] = useState<any>({});
    const [planList, setPlanList] = useState<any[]>([]);

    const openContactList = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers],
            });
            setContacts(data);
            contactListSheet.current.open();
        }
    };

    const selectNetwork = (iNetwork: any) => {
        setNetwork(iNetwork);
        setPlanList(dataPlanList[iNetwork.toUpperCase()]);
        setSelectedPlan(dataPlanList[iNetwork.toUpperCase()][0]);
        setAmount(dataPlanList[iNetwork.toUpperCase()][0].amount);
    };

    const verifyDetailsAndProceed = () => {
        if (selectedContact === "" || network === "") {
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
            <NavigationHeaderBar title="Buy Data" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.billScreen.screenContent}>
                    <RecentAirtimeScroll />

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
                                Phone Number
                            </Text>
                            <TextInput
                                placeholder="7043306040"
                                value={selectedContact}
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .input
                                }
                                onChangeText={(e) => setSelectedContact(e)}
                            />
                            <View
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .selectButtonDiv
                                }
                            >
                                <Pressable
                                    onPress={openContactList}
                                    style={
                                        styles.billScreen.screenContent
                                            .formContent.selectButtonDiv.button
                                    }
                                >
                                    <Text
                                        style={
                                            styles.billScreen.screenContent
                                                .formContent.selectButtonDiv
                                                .button.text
                                        }
                                    >
                                        Choose number from contact
                                    </Text>
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
                                Select Network
                            </Text>
                            <View
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .selectNetworkDiv
                                }
                            >
                                {networkList.map((iNetwork, index: number) => {
                                    return (
                                        <Pressable
                                            key={index}
                                            style={
                                                network !== iNetwork.title
                                                    ? styles.billScreen
                                                          .screenContent
                                                          .formContent
                                                          .selectNetworkDiv
                                                          .singleNetwork
                                                    : {
                                                          ...styles.billScreen
                                                              .screenContent
                                                              .formContent
                                                              .selectNetworkDiv
                                                              .singleNetwork,
                                                          borderColor:
                                                              iNetwork.color,
                                                      }
                                            }
                                            onPress={() =>
                                                selectNetwork(iNetwork.title)
                                            }
                                        >
                                            <Image
                                                source={iNetwork.image}
                                                style={
                                                    styles.billScreen
                                                        .screenContent
                                                        .formContent
                                                        .selectNetworkDiv
                                                        .singleNetwork.image
                                                }
                                            />
                                        </Pressable>
                                    );
                                })}
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
                                    onPress={() => {
                                        network
                                            ? selectPlanSheet.current.open()
                                            : "";
                                    }}
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
                                                  }
                                        }
                                    >
                                        {selectedPlan.title
                                            ? selectedPlan.title
                                            : `Select ${network.toUpperCase()} Data Plan`}
                                    </Text>
                                    <Pressable
                                        style={{ marginLeft: "auto" }}
                                        onPress={() => {
                                            network
                                                ? selectPlanSheet.current.open()
                                                : "";
                                        }}
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
            <ContactListSheet
                contactListSheet={contactListSheet}
                setSelectedContact={setSelectedContact}
                contacts={contacts}
            />
            <SelectDataPlanSheet
                selectPlanSheet={selectPlanSheet}
                setSelectedPlan={setSelectedPlan}
                planList={planList}
                setAmount={setAmount}
            />
            <PaymentOptionSheet
                paymentOptionSheet={paymentOptionSheet}
                data={{
                    selectedContact,
                    network,
                    amount,
                    selectedPlan,
                    transaction: "Data",
                    successComponent: `<p style='padding-left: 40; padding-right: 40; text-align: center; font-family: BricolageLight; letter-spacing: 0.2; color: rgba(0,0,0,0.75); line-height: 25;
                    font-size: 20px;'>Your have successfully sent <strong>${selectedPlan.title}</strong> to <strong>${selectedContact}</strong></p>`,
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(billScreenStyle);

export default BuyDataScreen;
