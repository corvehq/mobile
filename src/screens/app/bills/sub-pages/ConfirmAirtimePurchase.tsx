import {
    Platform,
    NativeModules,
    ScrollView,
    StyleSheet,
    View,
    Pressable,
    Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { confirmAirtimePurchaseStyle } from "../../../../styles/homeStyle";
import { blurhash, globalScrollViewStyle } from "../../../../styles/const";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
import { useRef } from "react";
import { Image } from "expo-image";
import ConfirmPinSheet from "../../../../components/bottomsheet/ConfirmPinSheet";
import { formatter } from "../../../../utils/formatCurrency";
const StatusBarManager = NativeModules;

const ConfirmAirtimePurchaseScreen = ({ route }: { route: any }) => {
    const { data } = route.params;
    const confirmPinSheet = useRef<any>();

    const proceedToPin = () => {
        confirmPinSheet.current.open();
    };

    return (
        <SafeAreaView
            style={{
                ...styles.confirmTransferScreen,
                paddingTop:
                    Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
            }}
        >
            <NavigationHeaderBar title="Confirm Details" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.confirmTransferScreen.screenContent}>
                    <>
                        <View
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails
                            }
                        >
                            <View
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails
                                        .singleInfoContentBlock
                                }
                            >
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContentBlock.titleText
                                    }
                                >
                                    From
                                </Text>
                                <Text
                                    style={{
                                        ...styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContentBlock.bodyText,
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {data.wallet} Wallet
                                </Text>
                            </View>

                            <View
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                }
                            >
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.titleText
                                    }
                                >
                                    Transaction
                                </Text>
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.bodyText
                                    }
                                >
                                    {data.transaction}
                                </Text>
                            </View>

                            <View
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                }
                            >
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.titleText
                                    }
                                >
                                    {data.transaction.toLowerCase() ===
                                        "electricity" ||
                                        data.transaction.toLowerCase() ===
                                            "tv subscription" ||
                                        (data.transaction.toLowerCase() ===
                                            "internet subscription" &&
                                            "Distributor")}
                                    {data.transaction.toLowerCase() ===
                                        "airtime" ||
                                        (data.transaction.toLowerCase() ===
                                            "data" &&
                                            "Network")}
                                </Text>
                                <View
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.flexView
                                    }
                                >
                                    <Image
                                        source={require(
                                            `../../../../assets/images/utilities/glo.png`,
                                        )}
                                        placeholder={blurhash}
                                        contentFit="cover"
                                        transition={1000}
                                        priority="high"
                                        style={
                                            styles.confirmTransferScreen
                                                .screenContent
                                                .transactionDetails
                                                .singleInfoContent.flexView
                                                .image
                                        }
                                    />
                                    <Text
                                        style={
                                            styles.confirmTransferScreen
                                                .screenContent
                                                .transactionDetails
                                                .singleInfoContent.flexView.text
                                        }
                                    >
                                        {data.network}
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                }
                            >
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.titleText
                                    }
                                >
                                    {data.transaction.toLowerCase() ===
                                        "electricity" && "Metre Number"}
                                    {data.transaction.toLowerCase() ===
                                        "tv subscription" && "Decoder Number"}
                                    {data.transaction.toLowerCase() ===
                                        "airtime" ||
                                        (data.transaction.toLowerCase() ===
                                            "data" &&
                                            "Phone Number")}
                                    {data.transaction.toLowerCase() ===
                                        "internet subscription" && "Account ID"}
                                </Text>
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.bodyText
                                    }
                                >
                                    {data.selectedContact}
                                </Text>
                            </View>

                            <View
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                }
                            >
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.titleText
                                    }
                                >
                                    Amount
                                </Text>
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.bodyText
                                    }
                                >
                                    {formatter.format(parseInt(data.amount))}
                                </Text>
                            </View>

                            <View
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                }
                            >
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.titleText
                                    }
                                >
                                    Network Fee
                                </Text>
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.bodyText
                                    }
                                >
                                    ₦10.00
                                </Text>
                            </View>

                            <View
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                }
                            >
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.titleText
                                    }
                                >
                                    Amount To Pay
                                </Text>
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.bodyText
                                    }
                                >
                                    ₦510.00
                                </Text>
                            </View>
                        </View>
                        <View
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .buttonDiv
                            }
                        >
                            <Pressable
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .buttonDiv.button
                                }
                                onPress={proceedToPin}
                            >
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.buttonDiv.button.text
                                    }
                                >
                                    Pay
                                </Text>
                            </Pressable>
                        </View>
                    </>
                </View>
            </ScrollView>
            <ConfirmPinSheet
                successComponent={data.successComponent}
                confirmPinSheet={confirmPinSheet}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(confirmAirtimePurchaseStyle);

export default ConfirmAirtimePurchaseScreen;
