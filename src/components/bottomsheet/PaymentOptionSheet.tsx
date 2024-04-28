import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import RBSheet, { RBSheetRef } from "react-native-raw-bottom-sheet";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { LegacyRef, useState } from "react";
import { paymentOptionList } from "../../data/paymentOptionList";
import { defaultAccentColor, globalFullButtonStyle } from "../../styles/const";
import OptionWalletIcon from "../../assets/icons/OptionWalletIcon";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../../utils/types";
import { toastNotification } from "../../utils/toast";

const PaymentOptionSheet = ({
    paymentOptionSheet,
    data,
}: {
    paymentOptionSheet: LegacyRef<RBSheetRef> | any;
    data: any;
}) => {
    const [activeWallet, setActiveWallet] = useState("");
    const { navigate } = useNavigation<Nav>();

    const confirmSelectionAndProceed = () => {
        if (activeWallet === "") {
            toastNotification(
                "error",
                "Select a wallet",
                "Select a wallet to be charged from",
            );
            return;
        }
        paymentOptionSheet.current.close();
        navigate("ConfirmAirtimePurchase", {
            data: { ...data, wallet: activeWallet },
        });
    };

    return (
        <>
            <RBSheet
                customStyles={{
                    ...styles.bottomSheet,
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        padding: wp(0),
                    },
                    draggableIcon: {
                        backgroundColor: "grey",
                    },
                    container: {
                        backgroundColor: "#f2f2f2",
                        borderRadius: 20,
                    },
                }}
                customModalProps={{
                    animationType: "slide",
                    statusBarTranslucent: true,
                }}
                height={hp(65)}
                dragOnContent
                openDuration={150}
                closeDuration={150}
                ref={paymentOptionSheet}
                draggable
            >
                <View style={styles.bottomSheet.sheetContent}>
                    <Text style={styles.bottomSheet.sheetContent.title}>
                        Payment
                    </Text>
                    <ScrollView
                        style={styles.bottomSheet.sheetContent.scrollView}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text
                            style={
                                styles.bottomSheet.sheetContent.scrollView
                                    .questionText
                            }
                        >
                            How would you like to pay?
                        </Text>
                        <View
                            style={
                                styles.bottomSheet.sheetContent.scrollView.list
                            }
                        >
                            {paymentOptionList.map((option, index) => {
                                return (
                                    <Pressable
                                        style={
                                            styles.bottomSheet.sheetContent
                                                .scrollView.list.checkBox
                                        }
                                        key={index}
                                        onPress={() =>
                                            setActiveWallet(option.value)
                                        }
                                    >
                                        <OptionWalletIcon
                                            size={{ height: "30", width: "30" }}
                                            color={defaultAccentColor}
                                        />
                                        <Text
                                            style={
                                                styles.bottomSheet.sheetContent
                                                    .scrollView.list.checkBox
                                                    .text
                                            }
                                        >
                                            {option.title}
                                        </Text>
                                        <Pressable
                                            style={
                                                styles.bottomSheet.sheetContent
                                                    .scrollView.list.checkBox
                                                    .check
                                            }
                                            onPress={() =>
                                                setActiveWallet(option.value)
                                            }
                                        >
                                            <Pressable
                                                style={
                                                    option.value ===
                                                    activeWallet
                                                        ? styles.bottomSheet
                                                              .sheetContent
                                                              .scrollView.list
                                                              .checkBox.check
                                                              .active
                                                        : ""
                                                }
                                                onPress={() =>
                                                    setActiveWallet(
                                                        option.value,
                                                    )
                                                }
                                            ></Pressable>
                                        </Pressable>
                                    </Pressable>
                                );
                            })}
                        </View>
                        <View
                            style={
                                styles.bottomSheet.sheetContent.scrollView
                                    .invoice
                            }
                        >
                            <View
                                style={
                                    styles.bottomSheet.sheetContent.scrollView
                                        .invoice.paidAmount
                                }
                            >
                                <Text
                                    style={
                                        styles.bottomSheet.sheetContent
                                            .scrollView.invoice.paidAmount.title
                                    }
                                >
                                    Amount to be paid
                                </Text>
                                <Text
                                    style={
                                        styles.bottomSheet.sheetContent
                                            .scrollView.invoice.paidAmount.data
                                    }
                                >
                                    ₦70.56
                                </Text>
                            </View>
                            <View
                                style={
                                    styles.bottomSheet.sheetContent.scrollView
                                        .invoice.walletBalance
                                }
                            >
                                <Text
                                    style={
                                        styles.bottomSheet.sheetContent
                                            .scrollView.invoice.walletBalance
                                            .title
                                    }
                                >
                                    Wallet balance
                                </Text>
                                <Text
                                    style={
                                        styles.bottomSheet.sheetContent
                                            .scrollView.invoice.walletBalance
                                            .data
                                    }
                                >
                                    ₦7,000.56{" "}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={
                                styles.bottomSheet.sheetContent.scrollView
                                    .buttonDiv
                            }
                        >
                            <Pressable
                                style={globalFullButtonStyle}
                                onPress={confirmSelectionAndProceed}
                            >
                                <Text style={globalFullButtonStyle.text}>
                                    Pay now
                                </Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
            </RBSheet>
        </>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        sheetContent: {
            padding: 15,
            alignItems: "stretch",
            title: {
                fontSize: 19,
                letterSpacing: 0.3,
                color: "rgba(0,0,0,0.7)",
                textAlign: "center",
                fontFamily: "BricolageLight",
                paddingBottom: 10,
            },
            scrollView: {
                padding: 20,
                questionText: {
                    fontSize: 20,
                    letterSpacing: 0.4,
                    color: "rgba(0,0,0,0.85)",
                    fontFamily: "BricolageLight",
                    paddingBottom: 10,
                },
                list: {
                    paddingTop: 15,
                    paddingBottom: 15,
                    checkBox: {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 10,
                        paddingTop: 20,
                        paddingBottom: 20,
                        check: {
                            marginLeft: "auto",
                            width: 23,
                            height: 23,
                            borderRadius: 60,
                            borderColor: defaultAccentColor,
                            borderWidth: 1.2,
                            padding: 3.5,
                            active: {
                                width: "100%",
                                height: "100%",
                                borderRadius: 60,
                                backgroundColor: defaultAccentColor,
                            },
                        },
                        text: {
                            fontFamily: "BricolageLight",
                            fontSize: 17,
                            letterSpacing: 0.2,
                            color: "rgba(0,0,0,0.85)",
                            lineHeight: 23,
                        },
                    },
                },
                invoice: {
                    paidAmount: {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 3,
                        paddingRight: 3,
                        title: {
                            fontSize: 17,
                            letterSpacing: 0.4,
                            color: "rgba(0,0,0,0.9)",
                            fontFamily: "BricolageLight",
                        },
                        data: {
                            fontSize: 18,
                            letterSpacing: 0.3,
                            fontFamily: "BricolageLight",
                            color: defaultAccentColor,
                        },
                    },
                    walletBalance: {
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 3,
                        paddingRight: 3,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        title: {
                            fontSize: 17,
                            letterSpacing: 0.4,
                            color: "rgba(0,0,0,0.9)",
                            fontFamily: "BricolageLight",
                        },
                        data: {
                            fontSize: 18,
                            letterSpacing: 0.3,
                            fontFamily: "BricolageLight",
                            color: defaultAccentColor,
                        },
                    },
                },
                buttonDiv: {
                    paddingTop: hp(5),
                    paddingBottom: hp(2),
                    button: {
                        height: 56,
                        borderRadius: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: defaultAccentColor,
                        text: {
                            color: "#ffffff",
                            fontSize: 19,
                            letterSpacing: 0.4,
                            fontFamily: "BricolageLight",
                        },
                    },
                },
            },
        },
    },
} as any);

export default PaymentOptionSheet;
