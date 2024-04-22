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
// import { isBalanceHidden } from "../../utils/jotaiAtoms";
import EyeSlashIcon from "../../assets/icons/EyeSlashIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import { useState } from "react";
import {
    defaultAccentColor,
    defaultAppGreen,
    defaultMainFont,
} from "../../styles/const";
import FundWalletIcon from "../../assets/icons/FundWalletIcon";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../../utils/types";

const BalanceCard = () => {
    const { navigate } = useNavigation<Nav>();
    const [isBalancHiddenState, setIsBalanceHiddenState] = useState(false);

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
                        onPress={() =>
                            setIsBalanceHiddenState(!isBalancHiddenState)
                        }
                    >
                        {isBalancHiddenState ? (
                            <Text
                                style={{
                                    ...styles.balanceCardWrapper.balanceCard
                                        .view.balanceTextDiv.balanceText,
                                    paddingTop: hp(1),
                                }}
                            >
                                * * * * * * *
                            </Text>
                        ) : (
                            <Text
                                style={
                                    styles.balanceCardWrapper.balanceCard.view
                                        .balanceTextDiv.balanceText
                                }
                            >
                                ₦500,000
                            </Text>
                        )}
                        <Pressable
                            style={
                                styles.balanceCardWrapper.balanceCard.view
                                    .balanceTextDiv.eyeIconButton
                            }
                            onPress={() =>
                                setIsBalanceHiddenState(!isBalancHiddenState)
                            }
                        >
                            {isBalancHiddenState ? (
                                <EyeIcon
                                    color="#ffffff"
                                    size={{ width: "17", height: "17" }}
                                />
                            ) : (
                                <EyeSlashIcon
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
                        color: "rgba(255,255,255,1)",
                        fontSize: 38,
                        letterSpacing: 0.8,
                        fontFamily: "BricolageLight",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        height: "100%",
                        paddingTop: hp(0.4),
                    },
                    eyeIconButton: {
                        height: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        marginLeft: -5,
                    },
                },
                fundButtonDiv: {
                    paddingTop: hp(2.5),
                    button: {
                        height: 50,
                        width: 160,
                        borderRadius: 11,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 6,
                        backgroundColor: "#ffffff",
                        text: {
                            color: defaultAppGreen,
                            fontFamily: "BricolageLight",
                            letterSpacing: 0.8,
                            fontSize: 19,
                        },
                    },
                },
            },
        },
    },
} as any);

export default BalanceCard;
