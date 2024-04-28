import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import EyeSlashIcon from "../../assets/icons/EyeSlashIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import { defaultAccentColor, defaultAppGreen } from "../../styles/const";
import FundWalletIcon from "../../assets/icons/FundWalletIcon";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { isBalanceHidden } from "../../utils/jotaiAtoms";
import { useEffect, useState } from "react";

const BalanceCard = () => {
    const { navigate } = useNavigation<Nav>();
    const [isBalancHiddenState, setIsBalanceHiddenState] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem("isBalancHiddenStates").then((data: any) => {
            setIsBalanceHiddenState(Boolean(data));
            if (data === "true") {
                setIsBalanceHiddenState(true);
            } else {
                setIsBalanceHiddenState(false);
            }
        });
    }, []);

    const toggleBalanceDisplay = async () => {
        if (isBalancHiddenState) {
            await AsyncStorage.setItem("isBalancHiddenStates", "false");
            setIsBalanceHiddenState(false);
        } else {
            setIsBalanceHiddenState(true);
            await AsyncStorage.setItem("isBalancHiddenStates", "true");
        }
    };

    return (
        <View style={styles.balanceCardWrapper}>
            <ImageBackground
                source={require("../../assets/images/misc/bi.png")}
                style={styles.balanceCardWrapper.balanceCard}
                resizeMode="cover"
            >
                <View style={styles.balanceCardWrapper.balanceCard.view}>
                    <Pressable
                        style={
                            styles.balanceCardWrapper.balanceCard.view
                                .balanceTextDiv
                        }
                        onPress={toggleBalanceDisplay}
                    >
                        {isBalancHiddenState ? (
                            <Text
                                style={{
                                    ...styles.balanceCardWrapper.balanceCard
                                        .view.balanceTextDiv.balanceText,
                                    color: "red",
                                    letterSpacing: 1.5,
                                }}
                            >
                                ₦500,000{" "}
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    ...styles.balanceCardWrapper.balanceCard
                                        .view.balanceTextDiv.balanceText,
                                    letterSpacing: 1.5,
                                }}
                            >
                                ₦500,000{" "}
                            </Text>
                        )}
                        <Pressable
                            style={
                                styles.balanceCardWrapper.balanceCard.view
                                    .balanceTextDiv.eyeIconButton
                            }
                            onPress={toggleBalanceDisplay}
                        >
                            {isBalancHiddenState ? (
                                <EyeSlashIcon
                                    color="#ffffff"
                                    size={{ width: "17", height: "17" }}
                                />
                            ) : (
                                <EyeIcon
                                    color="#ffffff"
                                    size={{ width: "17", height: "17" }}
                                />
                            )}
                        </Pressable>
                    </Pressable>
                    <View
                        style={
                            styles.balanceCardWrapper.balanceCard.view
                                .fundButtonDiv
                        }
                    >
                        <Pressable
                            style={
                                styles.balanceCardWrapper.balanceCard.view
                                    .fundButtonDiv.button
                            }
                            onPress={() => navigate("FundWallet")}
                        >
                            <FundWalletIcon color={defaultAppGreen} />
                            <Text
                                style={
                                    styles.balanceCardWrapper.balanceCard.view
                                        .fundButtonDiv.button.text
                                }
                            >
                                Fund Wallet
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
        // <View>
        //     <Pressable></Pressable>
        //     <Pressable></Pressable>
        //     <Pressable></Pressable>
        // </View>
    );
};

const styles = StyleSheet.create({
    balanceCardWrapper: {
        paddingTop: hp(1),
        paddingBottom: hp(1),
        paddingLeft: wp(3.5),
        paddingRight: wp(3.5),
        balanceCard: {
            height: 190,
            borderRadius: 20,
            overflow: "hidden",
            backgroundColor: defaultAccentColor,
            view: {
                paddingTop: hp(2),
                paddingBottom: 10,
                paddingLeft: 25,
                paddingRight: 25,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(22,35,2,0.3)",
                balanceTextDiv: {
                    flexDirection: "row",
                    gap: 20,
                    marginTop: 10,
                    alignItems: "center",
                    height: 51,
                    balanceText: {
                        // borderWidth: 1,
                        // borderColor: "red",
                        fontSize: 37,
                        fontFamily: "NumberFont",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: hp(0.4),
                        color: "#ffffff",
                    },
                    eyeIconButton: {
                        height: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        marginLeft: -5,
                        marginTop: 5,
                    },
                },
                fundButtonDiv: {
                    paddingTop: hp(2.5),
                    button: {
                        height: 53,
                        width: 180,
                        borderRadius: 11,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 6,
                        backgroundColor: "#ffffff",
                        text: {
                            color: defaultAppGreen,
                            fontFamily: "NumberFont",
                            letterSpacing: 0.2,
                            fontSize: 19,
                        },
                    },
                },
            },
        },
    },
} as any);

export default BalanceCard;
