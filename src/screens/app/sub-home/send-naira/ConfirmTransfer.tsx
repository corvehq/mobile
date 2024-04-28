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
import { confirmTransferStyle } from "../../../../styles/homeStyle";
import {
    blurhash,
    globalFullButtonStyle,
    globalScrollViewStyle,
} from "../../../../styles/const";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
import { useEffect, useRef, useState } from "react";
import SendNairaIcon from "../../../../assets/icons/SendNairaIcon";
import { Image } from "expo-image";
import { formatter } from "../../../../utils/formatCurrency";
import ConfirmPinSheet from "../../../../components/bottomsheet/ConfirmPinSheet";
import SendENairaIcon from "../../../../assets/icons/SendENairaIcon";
const StatusBarManager = NativeModules;

const ConfirmTransferScreen = ({ route }: { route: any }) => {
    const { data } = route.params;
    const confirmPinSheet = useRef<any>();
    const [bankDetails, setBankDetails] = useState<any>({});

    useEffect(() => {
        setBankDetails(data.selectedBank);
    }, [data]);

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
                    {data.type ? (
                        <ENairaInfo
                            amount={data.amount}
                            proceedToPin={proceedToPin}
                            description={data.description}
                        />
                    ) : (
                        <NairaInfo
                            amount={data.amount}
                            bankDetails={bankDetails}
                            proceedToPin={proceedToPin}
                            description={data.description}
                        />
                    )}
                </View>
            </ScrollView>
            <ConfirmPinSheet
                confirmPinSheet={confirmPinSheet}
                successComponent={data.successComponent}
            />
        </SafeAreaView>
    );
};

const NairaInfo = ({
    amount,
    bankDetails,
    proceedToPin,
    description,
}: {
    amount: string;
    bankDetails: any;
    proceedToPin: () => void;
    description: string;
}) => {
    return (
        <>
            <View
                style={styles.confirmTransferScreen.screenContent.amountDetails}
            >
                <Pressable
                    style={
                        styles.confirmTransferScreen.screenContent.amountDetails
                            .icon
                    }
                >
                    <SendNairaIcon size={{ height: "25", width: "25" }} />
                </Pressable>
                <View
                    style={
                        styles.confirmTransferScreen.screenContent.amountDetails
                            .textDiv
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
                        {formatter.format(parseInt(amount))}
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
                                .transactionDetails.singleInfoContent.titleText
                        }
                    >
                        To
                    </Text>
                    <Text
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.bodyText
                        }
                    >
                        Robinson Honour
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
                                .transactionDetails.singleInfoContent.titleText
                        }
                    >
                        Bank
                    </Text>
                    <View
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.flexView
                        }
                    >
                        <Text
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.text
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
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.image
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
                                .transactionDetails.singleInfoContent.titleText
                        }
                    >
                        Account Number
                    </Text>
                    <Text
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.bodyText
                        }
                    >
                        2062473523
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
                                .transactionDetails.singleInfoContent.titleText
                        }
                    >
                        Transaction Fees
                    </Text>
                    <Text
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.bodyText
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
                                .transactionDetails.singleInfoContent.titleText
                        }
                    >
                        Description
                    </Text>
                    <Text
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.bodyText
                        }
                    >
                        {description}
                    </Text>
                </View>
            </View>
            <View style={styles.confirmTransferScreen.screenContent.buttonDiv}>
                <Pressable style={globalFullButtonStyle} onPress={proceedToPin}>
                    <Text style={globalFullButtonStyle.text}>Next</Text>
                </Pressable>
            </View>
        </>
    );
};

const ENairaInfo = ({
    amount,
    proceedToPin,
    description,
}: {
    amount: string;
    proceedToPin: () => void;
    description: string;
}) => {
    return (
        <>
            <View
                style={styles.confirmTransferScreen.screenContent.amountDetails}
            >
                <Pressable
                    style={{
                        ...styles.confirmTransferScreen.screenContent
                            .amountDetails.icon,
                        backgroundColor: "rgba(226, 66, 92, 1)",
                    }}
                >
                    <SendENairaIcon size={{ height: "25", width: "25" }} />
                </Pressable>
                <View
                    style={
                        styles.confirmTransferScreen.screenContent.amountDetails
                            .textDiv
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
                        {formatter.format(parseInt(amount))}
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
                                .transactionDetails.singleInfoContent.titleText
                        }
                    >
                        From
                    </Text>
                    <Text
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.bodyText
                        }
                    >
                        0xbbba9...s8s0
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
                                .transactionDetails.singleInfoContent.titleText
                        }
                    >
                        To
                    </Text>
                    <Text
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.bodyText
                        }
                    >
                        0xbbba9...s8s0
                    </Text>
                </View>

                <View
                    style={
                        styles.confirmTransferScreen.screenContent
                            .transactionDetails.singleInfoContent
                    }
                >
                    <View
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.flexView
                        }
                    >
                        <Text
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.text
                            }
                        >
                            Amount
                        </Text>
                        <Text
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.tinyText
                            }
                        >
                            70.56 eNaira
                        </Text>
                    </View>
                </View>

                <View
                    style={
                        styles.confirmTransferScreen.screenContent
                            .transactionDetails.singleInfoContent
                    }
                >
                    <View
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.flexView
                        }
                    >
                        <Text
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.text
                            }
                        >
                            Network Fee
                        </Text>
                        <Text
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.tinyText
                            }
                        >
                            0.56 eNaira
                        </Text>
                    </View>
                </View>

                <View
                    style={
                        styles.confirmTransferScreen.screenContent
                            .transactionDetails.singleInfoContent
                    }
                >
                    <View
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.flexView
                        }
                    >
                        <Text
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.text
                            }
                        >
                            Description
                        </Text>
                        <Text
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.tinyText
                            }
                        >
                            {description}
                        </Text>
                    </View>
                </View>

                <View
                    style={
                        styles.confirmTransferScreen.screenContent
                            .transactionDetails.singleInfoContent
                    }
                >
                    <View
                        style={
                            styles.confirmTransferScreen.screenContent
                                .transactionDetails.singleInfoContent.flexView
                        }
                    >
                        <Text
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.text
                            }
                        >
                            Total Amount
                        </Text>
                        <Text
                            style={
                                styles.confirmTransferScreen.screenContent
                                    .transactionDetails.singleInfoContent
                                    .flexView.tinyText
                            }
                        >
                            80.16 eNaira
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.confirmTransferScreen.screenContent.buttonDiv}>
                <Pressable style={globalFullButtonStyle} onPress={proceedToPin}>
                    <Text style={globalFullButtonStyle.text}>Send</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create(confirmTransferStyle);

export default ConfirmTransferScreen;
