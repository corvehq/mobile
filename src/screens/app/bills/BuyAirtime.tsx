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
import { airtimeAmountSuggestions } from "../../../data/suggestionList";
import RecentAirtimeScroll from "../../../components/sections/RecentAirtimeScroll";
import PaymentOptionSheet from "../../../components/bottomsheet/PaymentOptionSheet";
import { formatter } from "../../../utils/formatCurrency";
import { toastNotification } from "../../../utils/toast";

const BuyAirtimeScreen = () => {
    const contactListSheet: any = useRef();
    const paymentOptionSheet: any = useRef();
    const [selectedContact, setSelectedContact] = useState<string>("");
    const [contacts, setContacts] = useState<any[]>([]);
    const [network, setNetwork] = useState("");
    const [amount, setAmount] = useState("");

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

    const verifyDetailsAndProceed = () => {
        if (selectedContact === "" || network === "" || amount === "") {
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
            <NavigationHeaderBar title="Buy Airtime" />
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
                                onChangeText={(e) => setSelectedContact(e)}
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .input
                                }
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
                                                setNetwork(iNetwork.title)
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
                                Select Amount
                            </Text>
                            <View
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .amountSuggestionDiv
                                }
                            >
                                {airtimeAmountSuggestions.map(
                                    (suggestion: string, index: number) => {
                                        return (
                                            <Pressable
                                                key={index}
                                                style={
                                                    styles.billScreen
                                                        .screenContent
                                                        .formContent
                                                        .amountSuggestionDiv
                                                        .suggestion
                                                }
                                                onPress={() =>
                                                    setAmount(suggestion)
                                                }
                                            >
                                                <Text
                                                    style={
                                                        styles.billScreen
                                                            .screenContent
                                                            .formContent
                                                            .amountSuggestionDiv
                                                            .suggestion.text
                                                    }
                                                >
                                                    ₦{suggestion}.00
                                                </Text>
                                            </Pressable>
                                        );
                                    },
                                )}
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
                                Amount
                            </Text>
                            <TextInput
                                placeholder="Amount"
                                value={amount}
                                style={
                                    styles.billScreen.screenContent.formContent
                                        .input
                                }
                                onChangeText={(e) => setAmount(e)}
                            />
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
            <PaymentOptionSheet
                paymentOptionSheet={paymentOptionSheet}
                data={{
                    selectedContact,
                    network,
                    amount,
                    transaction: "Airtime",
                    successComponent: `<p style='padding-left: 40; padding-right: 40; text-align: center; font-family: BricolageLight; letter-spacing: 0.2; color: rgba(0,0,0,0.75); line-height: 25;
                    font-size: 20px;'>Your have successfully recharged <span style='text-transform: capitalize;'>${network}</span> <strong>${selectedContact}</strong> with <strong>${formatter.format(parseInt(amount))}</strong></p>`,
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(billScreenStyle);

export default BuyAirtimeScreen;
