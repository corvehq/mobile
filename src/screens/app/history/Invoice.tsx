import {
    Image,
    NativeModules,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
const { StatusBarManager } = NativeModules;
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useEffect, useRef, useState } from "react";
import ShareReceiptBottomSheet from "../../../components/bottomsheet/ShareReceiptBottomSheet";
import { activityList } from "../../../data/activityList";
import { historyStyle } from "../../../styles/homeStyle";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
import { globalFullButtonStyle } from "../../../styles/const";

const InvoiceScreen = ({ route }: { route: any }) => {
    const [loading, setLoading] = useState(true);
    const [invoice, setInvoice] = useState<any>({});
    const { invoiceID } = route.params;
    const shareReceiptSheet = useRef();

    useEffect(() => {
        activityList.map((activity) => {
            if (activity.transactionId === invoiceID) {
                setInvoice(activity);
                setLoading(false);
                return;
            }
        });
    }, []);

    return (
        <>
            <SafeAreaView
                style={{
                    ...styles.transactionInvoiceScreen,
                    paddingTop:
                        Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
                }}
            >
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    <>
                        <NavigationHeaderBar title="Successful Transaction" />
                        <ScrollView
                            style={{ width: "100%" }}
                            showsVerticalScrollIndicator={false}
                        >
                            <View
                                style={
                                    styles.transactionInvoiceScreen.invoiceIntro
                                }
                            >
                                <View
                                    style={
                                        styles.transactionInvoiceScreen
                                            .invoiceIntro.imageDiv
                                    }
                                >
                                    <Image
                                        source={require("../../../assets/images/notifications/success.png")}
                                        style={
                                            styles.transactionInvoiceScreen
                                                .invoiceIntro.imageDiv.image
                                        }
                                    />
                                </View>
                                <Text
                                    style={
                                        styles.transactionInvoiceScreen
                                            .invoiceIntro.captionText
                                    }
                                >
                                    Your transaction was successful!
                                </Text>
                                <Text
                                    style={
                                        styles.transactionInvoiceScreen
                                            .invoiceIntro.amountText
                                    }
                                >
                                    {invoice.amount}
                                </Text>
                            </View>

                            <View
                                style={
                                    styles.transactionInvoiceScreen
                                        .invoiceCardDiv
                                }
                            >
                                <InitialInvoiceCard invoice={invoice} />
                                <SecondInvoiceCard
                                    shareReceiptSheet={shareReceiptSheet}
                                    invoice={invoice}
                                />
                            </View>
                        </ScrollView>
                        <ShareReceiptBottomSheet
                            shareReceiptSheet={shareReceiptSheet}
                        />
                    </>
                )}
            </SafeAreaView>
        </>
    );
};

const InitialInvoiceCard = ({ invoice }: { invoice: any }) => {
    return (
        <View
            style={styles.transactionInvoiceScreen.invoiceCardDiv.invoiceCard}
        >
            <View
                style={
                    styles.transactionInvoiceScreen.invoiceCardDiv.invoiceCard
                        .recipientContent
                }
            >
                <Image
                    source={invoice.image}
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.recipientContent.image
                    }
                />
                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.recipientContent.textDiv
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.recipientContent.textDiv.titleText
                        }
                    >
                        Recipient
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.recipientContent.textDiv.subText
                        }
                    >
                        {invoice.invoice.sendTo}
                    </Text>
                </View>
                {/* <View>
                    <Text>...</Text>
                </View> */}
            </View>
            <View
                style={
                    styles.transactionInvoiceScreen.invoiceCardDiv.invoiceCard
                        .invoiceList
                }
            >
                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Send to
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        {invoice.invoice.destinationNumber} (
                        {invoice.invoice.sendTo})
                    </Text>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Money Sent
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        {invoice.invoice.moneySent}
                    </Text>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Admin Fee
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        {invoice.invoice.adminFee}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const lineArray = [
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
];

const SecondInvoiceCard = ({
    shareReceiptSheet,
    invoice,
}: {
    shareReceiptSheet: any;
    invoice: any;
}) => {
    return (
        <View
            style={{
                ...styles.transactionInvoiceScreen.invoiceCardDiv.invoiceCard,
                paddingBottom: heightPercentageToDP(2.5),
            }}
        >
            <View
                style={
                    styles.transactionInvoiceScreen.invoiceCardDiv.invoiceCard
                        .invoiceList
                }
            >
                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Ref. Number
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        {invoice.invoice.refNo}
                    </Text>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Funding Source
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        Urbanpay MFB
                    </Text>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Transaction
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        {invoice.invoice.transaction}
                    </Text>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Destination Number
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        {invoice.invoice.destinationNumber}
                    </Text>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <View
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.line
                        }
                    >
                        {lineArray.map((_, index) => {
                            return (
                                <Text
                                    key={index}
                                    style={
                                        styles.transactionInvoiceScreen
                                            .invoiceCardDiv.invoiceCard
                                            .invoiceList.list.line.text
                                    }
                                >
                                    -
                                </Text>
                            );
                        })}
                    </View>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Amount
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        {invoice.invoice.moneySent}
                    </Text>
                </View>
                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Admin Fee
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        {invoice.invoice.adminFee}
                    </Text>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <View
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.line
                        }
                    >
                        {lineArray.map((_, index) => {
                            return (
                                <Text
                                    key={index}
                                    style={
                                        styles.transactionInvoiceScreen
                                            .invoiceCardDiv.invoiceCard
                                            .invoiceList.list.line.text
                                    }
                                >
                                    -
                                </Text>
                            );
                        })}
                    </View>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.list
                    }
                >
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.title
                        }
                    >
                        Total
                    </Text>
                    <Text
                        style={
                            styles.transactionInvoiceScreen.invoiceCardDiv
                                .invoiceCard.invoiceList.list.caption
                        }
                    >
                        $32.00
                    </Text>
                </View>

                <View
                    style={
                        styles.transactionInvoiceScreen.invoiceCardDiv
                            .invoiceCard.invoiceList.shareButtonDiv
                    }
                >
                    <Pressable
                        style={globalFullButtonStyle}
                        onPress={() => shareReceiptSheet.current.open()}
                    >
                        <Text style={globalFullButtonStyle.text}>
                            Share Receipt
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create(historyStyle);

export default InvoiceScreen;
