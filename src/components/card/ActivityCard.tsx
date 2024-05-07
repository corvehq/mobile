import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Nav } from "../../utils/types";
import { defaultAppBlack } from "../../styles/const";

const ActivityCard = ({ activity }: { activity: any }) => {
    const { navigate } = useNavigation<Nav>();

    return (
        <>
            <Pressable
                style={styles.activityCard}
                onPress={() =>
                    navigate("Invoice", {
                        invoiceID: activity.transactionId,
                    })
                }
            >
                <View style={styles.activityCard.leftSide}>
                    <Image
                        style={styles.activityCard.leftSide.image}
                        source={activity.image}
                    />
                    <View style={styles.activityCard.leftSide.textDiv}>
                        <Text
                            style={
                                styles.activityCard.leftSide.textDiv.titleText
                            }
                        >
                            {activity.title}
                        </Text>
                        <Text
                            style={
                                styles.activityCard.leftSide.textDiv.dateText
                            }
                        >
                            {activity.date}
                        </Text>
                    </View>
                </View>
                <View style={styles.activityCard.rightSide}>
                    <Text style={styles.activityCard.rightSide.text}>
                        {activity.amount}
                    </Text>
                </View>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    activityCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 1,
        paddingRight: 1,
        leftSide: {
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            image: {
                width: 55,
                height: 55,
                borderRadius: 60,
                borderColor: "rgba(0,0,0,0.2)",
                borderWidth: 3,
                padding: 1,
            },
            textDiv: {
                titleText: {
                    color: defaultAppBlack,
                    paddingBottom: 2.5,
                    fontFamily: "BricolageLight",
                    letterSpacing: 0.5,
                    fontSize: 18,
                    marginTop: -4,
                },
                dateText: {
                    color: "#111112",
                    opacity: 0.8,
                    paddingTop: 1.5,
                    fontFamily: "Bricolage",
                    letterSpacing: 0.2,
                    fontSize: 13,
                },
            },
        },
        rightSide: {
            text: {
                color: "#111111",
                marginTop: -10,
                paddingTop: 2.5,
                fontFamily: "Bricolage",
                letterSpacing: 0.5,
                fontSize: 16,
                paddingRight: 5,
            },
        },
    },
} as any);

export default ActivityCard;
