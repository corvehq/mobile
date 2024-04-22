import { Pressable, StyleSheet, Text, View } from "react-native";
import { HomeMethodsType, Nav } from "../../utils/types";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { defaultAppGreen } from "../../styles/const";

const HomeMethodCard = ({ method }: { method: HomeMethodsType }) => {
    const { navigate } = useNavigation<Nav>();

    return (
        <Pressable
            style={styles.homeMethodCard}
            onPress={() => navigate(method.screen)}
        >
            <Pressable
                style={{
                    ...styles.homeMethodCard.icon,
                    backgroundColor: method.accentColor,
                }}
                onPress={() => navigate(method.screen)}
            >
                {method.icon}
            </Pressable>
            <Text style={styles.homeMethodCard.titleText}>{method.title}</Text>
            <Text style={styles.homeMethodCard.descriptionText}>
                {method.description}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    homeMethodCard: {
        width: wp(43),
        padding: 15,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 25,
        paddingBottom: 25,
        borderRadius: 20,
        icon: {
            width: 50,
            height: 50,
            borderRadius: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        titleText: {
            color: defaultAppGreen,
            paddingTop: hp(2),
            fontFamily: "BricolageLight",
            fontSize: 21,
            letterSpacing: 0.4,
        },
        descriptionText: {
            fontFamily: "BricolageLight",
            color: "rgba(22,35,2,0.75)",
            fontSize: 19,
            paddingTop: hp(1),
        },
    },
} as any);

export default HomeMethodCard;
