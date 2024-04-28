import {
    Platform,
    NativeModules,
    ScrollView,
    View,
    StyleSheet,
    Text,
    Pressable,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalScrollViewStyle } from "../../../styles/const";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
import { qrCodeStyle, requestPaymentStyle } from "../../../styles/homeStyle";
import { TextInput } from "react-native-gesture-handler";
import ButtonScanIcon from "../../../assets/icons/ButtonScanIcon";
import {
    Dispatch,
    LegacyRef,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";
import SelectAssetSheet from "../../../components/bottomsheet/SelectAssetSheet";
import SendENairaIcon from "../../../assets/icons/SendENairaIcon";
import { AssetListTypes, RBSheetCustomRef } from "../../../utils/types";
import { RBSheetRef } from "react-native-raw-bottom-sheet";
const StatusBarManager = NativeModules;

const RequestPaymentScreen = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const selectAssetSheet = useRef<any>(null);
    const [selectedAsset, setSelectedAsset] = useState<AssetListTypes | null>(
        null
    );
    const [fluidTitle, setFluidTitle] = useState<string>("Request Payment");

    return (
        <SafeAreaView
            style={{
                ...styles.requestPaymentScreen,
                paddingTop:
                    Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
            }}
        >
            <NavigationHeaderBar title={fluidTitle} />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.requestPaymentScreen.screenContent}>
                    {activeTab === 0 ? (
                        <FirstTab
                            selectAssetSheet={selectAssetSheet}
                            setActiveTab={setActiveTab}
                            setFluidTitle={setFluidTitle}
                            selectedAsset={selectedAsset}
                        />
                    ) : (
                        <SecondTab
                            setActiveTab={setActiveTab}
                            setFluidTitle={setFluidTitle}
                        />
                    )}
                </View>
            </ScrollView>
            <SelectAssetSheet
                selectAssetSheet={selectAssetSheet}
                setSelectedAsset={setSelectedAsset}
            />
        </SafeAreaView>
    );
};

const FirstTab = ({
    selectAssetSheet,
    selectedAsset,
    setActiveTab,
    setFluidTitle,
}: {
    selectAssetSheet: LegacyRef<RBSheetRef> | any;
    selectedAsset: AssetListTypes | null;
    setActiveTab: Dispatch<SetStateAction<number>>;
    setFluidTitle: Dispatch<SetStateAction<string>>;
}) => {
    useEffect(() => {
        setFluidTitle("Request Payment");
    }, []);

    return (
        <>
            <View style={styles.requestPaymentScreen.screenContent.inputDiv}>
                <Text
                    style={
                        styles.requestPaymentScreen.screenContent.inputDiv.label
                    }
                >
                    Choose an asset to request
                </Text>
                <Pressable
                    style={
                        styles.requestPaymentScreen.screenContent.inputDiv
                            .pressableField
                    }
                    onPress={() => selectAssetSheet.current.open()}
                >
                    {selectedAsset === null ? (
                        <Pressable>
                            <SendENairaIcon color="rgba(0,0,0,0.15)" />
                        </Pressable>
                    ) : (
                        <Pressable>{selectedAsset.symbol}</Pressable>
                    )}
                    {selectedAsset === null ? (
                        <Text
                            style={
                                styles.requestPaymentScreen.screenContent
                                    .inputDiv.pressableField.text
                            }
                        >
                            eNaira
                        </Text>
                    ) : (
                        <Text
                            style={
                                styles.requestPaymentScreen.screenContent
                                    .inputDiv.pressableField.activeText
                            }
                        >
                            {selectedAsset.asset}
                        </Text>
                    )}
                </Pressable>
            </View>
            <View style={styles.requestPaymentScreen.screenContent.inputDiv}>
                <Text
                    style={
                        styles.requestPaymentScreen.screenContent.inputDiv.label
                    }
                >
                    Amount
                </Text>
                <TextInput
                    placeholder="10,000"
                    style={
                        styles.requestPaymentScreen.screenContent.inputDiv
                            .customInput
                    }
                />
            </View>
            <View style={styles.requestPaymentScreen.screenContent.inputDiv}>
                <Text
                    style={
                        styles.requestPaymentScreen.screenContent.inputDiv.label
                    }
                >
                    Description
                </Text>
                <TextInput
                    placeholder="Weekend Shutdown 🤑"
                    style={
                        styles.requestPaymentScreen.screenContent.inputDiv
                            .customInput
                    }
                />
            </View>
            <View style={styles.requestPaymentScreen.screenContent.buttonDiv}>
                <Pressable
                    style={
                        styles.requestPaymentScreen.screenContent.buttonDiv
                            .button
                    }
                    onPress={() => setActiveTab(1)}
                >
                    <Text
                        style={
                            styles.requestPaymentScreen.screenContent.buttonDiv
                                .button.text
                        }
                    >
                        Next
                    </Text>
                </Pressable>
            </View>
        </>
    );
};

const SecondTab = ({
    setFluidTitle,
}: {
    setActiveTab: Dispatch<SetStateAction<number>>;
    setFluidTitle: Dispatch<SetStateAction<string>>;
}) => {
    useEffect(() => {
        setFluidTitle("Send Link");
    }, []);

    return (
        <>
            <Text style={qrCodeStyle.qrCodeScreen.screenContent.titleText}>
                Scan QRCode for payment
            </Text>
            <View style={qrCodeStyle.qrCodeScreen.screenContent.imageDiv}>
                <Image
                    source={require("../../../assets/images/misc/qr-code.png")}
                    style={
                        qrCodeStyle.qrCodeScreen.screenContent.imageDiv.image
                    }
                />
            </View>
            <View
                style={
                    qrCodeStyle.qrCodeScreen.screenContent
                        .currencyValueContainer
                }
            >
                <Text
                    style={
                        qrCodeStyle.qrCodeScreen.screenContent
                            .currencyValueContainer.currencyOne
                    }
                >
                    70.56 eNaira
                </Text>
                <Text
                    style={
                        qrCodeStyle.qrCodeScreen.screenContent
                            .currencyValueContainer.currencyTwo
                    }
                >
                    ₦100,000
                </Text>
            </View>
            <View style={qrCodeStyle.qrCodeScreen.screenContent.infoContainer}>
                <Text
                    style={
                        qrCodeStyle.qrCodeScreen.screenContent.infoContainer
                            .text
                    }
                >
                    Your request link is already to send! Send this link for
                    payment, and it will ask them to send eNaira.
                </Text>
            </View>
            <View
                style={
                    qrCodeStyle.qrCodeScreen.screenContent.paymentDetailsContent
                }
            >
                <Text
                    style={
                        qrCodeStyle.qrCodeScreen.screenContent
                            .paymentDetailsContent.titleText
                    }
                >
                    Payment Link
                </Text>
                <Pressable
                    style={
                        qrCodeStyle.qrCodeScreen.screenContent
                            .paymentDetailsContent.addressContent
                    }
                >
                    <Text
                        style={
                            qrCodeStyle.qrCodeScreen.screenContent
                                .paymentDetailsContent.addressContent.text
                        }
                    >
                        0xjhkbjkfdshuihriuerAJKAJK
                    </Text>
                    <Pressable
                        style={
                            qrCodeStyle.qrCodeScreen.screenContent
                                .paymentDetailsContent.addressContent.button
                        }
                    >
                        <Text
                            style={
                                qrCodeStyle.qrCodeScreen.screenContent
                                    .paymentDetailsContent.addressContent.button
                                    .text
                            }
                        >
                            Copy
                        </Text>
                    </Pressable>
                </Pressable>
            </View>
            <View style={qrCodeStyle.qrCodeScreen.screenContent.buttonsDiv}>
                <Pressable
                    style={
                        qrCodeStyle.qrCodeScreen.screenContent.buttonsDiv
                            .secondButton
                    }
                >
                    <ButtonScanIcon size={{ width: "23", height: "23" }} />
                    <Text
                        style={
                            qrCodeStyle.qrCodeScreen.screenContent.buttonsDiv
                                .secondButton.text
                        }
                    >
                        Send Link
                    </Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create(requestPaymentStyle);

export default RequestPaymentScreen;
