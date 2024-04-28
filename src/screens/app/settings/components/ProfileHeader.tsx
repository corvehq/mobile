import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { defaultAccentColor } from "../../../../styles/const";

const ProfileHeader = () => {
    return (
        <View style={styles.profileHeader}>
            <View style={styles.profileHeader.imageDiv}>
                <Image
                    source={require("../../../../assets/images/avatars/man3.png")}
                    style={styles.profileHeader.profileImage}
                />
            </View>
            <View style={styles.profileHeader.tierIndicatorDiv}>
                <Pressable style={styles.profileHeader.tierIndicator}>
                    <Text style={styles.profileHeader.tierIndicator.text}>
                        Tier 1
                    </Text>
                </Pressable>
            </View>
            <View style={styles.profileHeader.textDiv}>
                <Text style={styles.profileHeader.fullName}>
                    Ogwu-Nelson David
                </Text>
                <Text style={styles.profileHeader.bankName}>
                    Wema Bank .{" "}
                    <Text style={styles.profileHeader.accountNumber}>
                        1234567765
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileHeader: {
        imageDiv: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        profileImage: {
            width: 85,
            height: 85,
            borderRadius: 60,
        },
        tierIndicatorDiv: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 15,
        },
        tierIndicator: {
            borderWidth: 1,
            borderColor: "rgba(218, 218, 218, 1)",
            width: 110,
            height: 32,
            borderRadius: 30,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            text: {
                fontFamily: "BricolageLight",
                fontSize: 16,
                letterSpacing: 0.4,
                color: defaultAccentColor,
            },
        },
        textDiv: {
            paddingTop: 15,
            paddingBottom: 15,
        },
        fullName: {
            fontFamily: "BricolageLight",
            fontSize: 19,
            letterSpacing: 0.3,
            textAlign: "center",
            paddingTop: 5,
            paddingBottom: 5,
        },
        bankName: {
            fontFamily: "BricolageLight",
            fontSize: 16,
            letterSpacing: 0.2,
            textAlign: "center",
            paddingTop: 5,
            paddingBottom: 5,
            color: "rgba(0,0,0,0.85)",
        },
        accountNumber: {
            color: defaultAccentColor,
        },
    },
} as any);

export default ProfileHeader;
