import { Pressable, StyleSheet, Text, View } from "react-native";
import {
    homeActionButtons,
    utilityActions,
} from "../../data/homeActionButtons";
import { HomeActionType, Nav } from "../../utils/types";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const ActionButtonsCard = () => {
    const { navigate } = useNavigation<Nav>();

    return (
        <>
            <View style={styles.actionButtonsCard}>
                {homeActionButtons.map((action: HomeActionType, index) => {
                    return (
                        <Pressable
                            style={styles.actionButtonsCard.button}
                            key={index}
                            onPress={() => navigate(action.screen)}
                        >
                            <Pressable
                                style={styles.actionButtonsCard.button.iconDiv}
                                onPress={() => navigate(action.screen)}
                            >
                                {action.icon}
                            </Pressable>
                            <Text style={styles.actionButtonsCard.button.text}>
                                {action.title}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
            <View style={styles.utilityActions}>
                {utilityActions.map((action: HomeActionType, index: number) => {
                    return (
                        <Pressable
                            key={index}
                            style={styles.utilityActions.button}
                        >
                            <Pressable
                                style={styles.utilityActions.button.iconDiv}
                            >
                                {action.icon}
                            </Pressable>
                            <Text style={styles.utilityActions.button.text}>
                                {action.title}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    actionButtonsCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: hp(2.5),
        paddingBottom: hp(2.5),
        paddingLeft: wp(5),
        paddingRight: wp(5),
        button: {
            borderWidth: 1.5,
            borderColor: "rgba(0,0,0,0.04)",
            width: 105,
            height: 115,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 21,
            iconDiv: {},
            text: {
                paddingTop: hp(1.2),
                fontFamily: "BricolageLight",
                letterSpacing: 0.3,
                color: "rgba(0,0,0,0.8)",
                fontSize: 15,
            },
        },
    },
    utilityActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: hp(1),
        paddingBottom: hp(2.5),
        paddingLeft: wp(7.5),
        paddingRight: wp(7.5),
        button: {
            alignItems: "center",
            justifyContent: "center",
            iconDiv: {},
            text: {
                paddingTop: hp(1),
                fontFamily: "BricolageLight",
                letterSpacing: 0.4,
                color: "rgba(0,0,0,0.9)",
                fontSize: 12,
            },
        },
    },
} as any);

export default ActionButtonsCard;
