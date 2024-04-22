import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import BellIcon from "../../assets/icons/BellIcon";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { defaultAppGreen, defaultMainFont } from "../../styles/const";

export const HomeHeader = () => {
    return (
        <View style={styles.homeHeader}>
            <View style={styles.homeHeader.leftSide}>
                <Text style={styles.homeHeader.leftSide.welcomeText}>
                    Welcome David,
                </Text>
            </View>
            <View style={styles.homeHeader.rightSide}>
                <Pressable style={styles.homeHeader.rightSide.button}>
                    <BellIcon size={{ width: "25", height: "25" }} />
                </Pressable>
                <Image
                    source={require("../../assets/images/avatars/man2.png")}
                    resizeMode="cover"
                    style={styles.homeHeader.rightSide.image}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeHeader: {
        paddingTop: hp(1),
        paddingBottom: hp(2),
        paddingLeft: wp(4.5),
        paddingRight: wp(4.5),
        flexDirection: "row",
        justifyContent: "space-between",
        leftSide: {
            flexDirection: "row",
            alignItems: "center",
            welcomeText: {
                fontFamily: "BricolageLight",
                letterSpacing: 0.3,
                fontSize: 21,
                fontWeight: "400",
                color: defaultAppGreen,
            },
        },
        rightSide: {
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            button: {
                borderWidth: 1.2,
                borderColor: "rgba(0,0,0,0.15)",
                paddingLeft: 1.5,
                width: 45,
                height: 45,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
            },
            image: {
                width: 50,
                height: 50,
                borderRadius: 50,
            },
        },
    },
} as any);

export default HomeHeader;
