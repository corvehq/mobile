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
import {
    confirmTransferStyle,
    sendNairaStyle,
} from "../../../../styles/homeStyle";
import { blurhash, globalScrollViewStyle } from "../../../../styles/const";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
import { useEffect, useState } from "react";
import HomeIcon from "../../../../assets/icons/HomeIcon";
import SendNairaIcon from "../../../../assets/icons/SendNairaIcon";
import { Image } from "expo-image";
import { formatter } from "../../../../utils/formatCurrency";
const StatusBarManager = NativeModules;

const ConfirmTransferScreen = ({ route }: { route: any }) => {
    const { data } = route.params;
    const [bankDetails, setBankDetails] = useState<any>({});

    useEffect(() => {
        setBankDetails(data.selectedBank);
    }, [data]);

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
                    <View
                        style={
                            styles.confirmTransferScreen.screenContent
                                .amountDetails
                        }
                    >
                        <Pressable
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .amountDetails.icon
                            }
                        >
                            <SendNairaIcon
                                size={{ height: "25", width: "25" }}
                            />
                        </Pressable>
                        <View
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .amountDetails.textDiv
                            }
                        >
                            <Text
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .amountDetails.textDiv.infoText
                                }
                            >
                                You are sending
                            </Text>
                            <Text
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .amountDetails.textDiv.amountText
                                }
                            >
                                {formatter.format(parseInt(data.amount))}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails
                        }
                    >
                        <View
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                            }
                        >
                            <Text
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .titleText
                                }
                            >
                                To
                            </Text>
                            <Text
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .bodyText
                                }
                            >
                                Ogwu-Nelson Victory
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
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .titleText
                                }
                            >
                                Bank
                            </Text>
                            <View
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .flexView
                                }
                            >
                                <Text
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.flexView.text
                                    }
                                >
                                    {bankDetails.name}
                                </Text>
                                <Image
                                    source={bankDetails.logo}
                                    placeholder={blurhash}
                                    contentFit="cover"
                                    transition={1000}
                                    priority="high"
                                    style={
                                        styles.confirmTransferScreen
                                            .screenContent.transactionDetails
                                            .singleInfoContent.flexView.image
                                    }
                                />
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
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .titleText
                                }
                            >
                                Account Number
                            </Text>
                            <Text
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .bodyText
                                }
                            >
                                2022442664
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
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .titleText
                                }
                            >
                                Transaction Fees
                            </Text>
                            <Text
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .bodyText
                                }
                            >
                                ₦0.00
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
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .titleText
                                }
                            >
                                Description
                            </Text>
                            <Text
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .transactionDetails.singleInfoContent
                                        .bodyText
                                }
                            >
                                {data.description}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={
                            styles.confirmTransferScreen.screenContent.buttonDiv
                        }
                    >
                        <Pressable
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .buttonDiv.button
                            }
                        >
                            <Text
                                style={
                                    styles.confirmTransferScreen.screenContent
                                        .buttonDiv.button.text
                                }
                            >
                                Next
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(confirmTransferStyle);

export default ConfirmTransferScreen;
