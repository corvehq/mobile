import { Pressable, StyleSheet, Text, View } from "react-native";
import ChevronRightIcon from "../../../../assets/icons/ChevronRightIcon";

const UpgradeWarning = () => {
    return (
        <View style={styles.upgradeWarning}>
            <View style={styles.upgradeWarning.warningDiv}>
                <View style={styles.upgradeWarning.textDiv}>
                    <Text style={styles.upgradeWarning.textDiv.titleText}>
                        Upgrade to a Tier 2 account
                    </Text>
                    <Text style={styles.upgradeWarning.textDiv.subTitleText}>
                        Upload relevant documents to upgrade
                    </Text>
                </View>
                <Pressable style={styles.upgradeWarning.icon}>
                    <ChevronRightIcon />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    upgradeWarning: {
        padding: 10,
        warningDiv: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 12,
            padding: 21,
            paddingTop: 17,
            paddingBottom: 17,
            backgroundColor: "rgba(229, 243, 205, 1)",
        },
        textDiv: {
            titleText: {
                fontFamily: "BricolageLight",
                fontSize: 19,
                letterSpacing: 0.2,
                paddingTop: 3,
                paddingBottom: 3,
                color: "rgba(22, 22, 53, 1)",
            },
            subTitleText: {
                fontSize: 15,
                letterSpacing: 0.1,
                fontFamily: "BricolageLight",
                paddingTop: 3,
                paddingBottom: 3,
                color: "rgba(104, 104, 115, 1)",
            },
        },
        icon: {},
    },
} as any);

export default UpgradeWarning;
