import { Pressable, StyleSheet, Text, View } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { defaultAppBlack, defaultAppGreen } from "../../styles/const";

const RecentTransactions = () => {
    return (
        <View style={styles.recentTransactionsSection}>
            <View style={styles.recentTransactionsSection.header}>
                <Text style={styles.recentTransactionsSection.header.title}>
                    Recent Transactions
                </Text>
                <Pressable
                    style={styles.recentTransactionsSection.header.button}
                >
                    <Text
                        style={
                            styles.recentTransactionsSection.header.button.text
                        }
                    >
                        See All
                    </Text>
                </Pressable>
            </View>

            <View></View>
        </View>
    );
};

const styles = StyleSheet.create({
    recentTransactionsSection: {
        paddingLeft: wp(3),
        paddingRight: wp(3),
        header: {
            paddingLeft: wp(1.5),
            paddingRight: wp(1.5),
            flexDirection: "row",
            justifyContent: "space-between",
            title: {
                fontSize: 22,
                fontFamily: "BricolageLight",
                letterSpacing: 0.2,
                color: defaultAppGreen,
            },
            button: {
                text: {
                    fontSize: 16,
                    fontFamily: "BricolageLight",
                    letterSpacing: 0.4,
                    color: "rgba(22,35,2,0.8)",
                },
            },
        },
    },
} as any);

export default RecentTransactions;
