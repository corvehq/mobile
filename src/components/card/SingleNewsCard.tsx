import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Nav } from "../../utils/types";

const SingleNewsCard = ({
    news,
}: {
    news: {
        title: string;
        image: any;
        content: string;
        category: string;
        date: string;
    };
}) => {
    const { navigate } = useNavigation<Nav>();

    return (
        <Pressable
            style={styles.singleNewsCard}
            onPress={() => navigate("SingleNews")}
        >
            <Image source={news.image} style={styles.singleNewsCard.image} />
            <View style={styles.singleNewsCard.textDiv}>
                <Text style={styles.singleNewsCard.textDiv.title}>
                    {news.title}
                </Text>
                <Text style={styles.singleNewsCard.textDiv.content}>
                    {news.content}...
                </Text>
                <Text style={styles.singleNewsCard.textDiv.date}>
                    {news.date} / {news.category}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    singleNewsCard: {
        paddingTop: hp(2.1),
        paddingBottom: hp(2.1),
        paddingLeft: wp(0.5),
        paddingRight: wp(0.5),
        borderTopWidth: 1.5,
        borderTopColor: "rgba(0,0,0,0.05)",
        flexDirection: "row",
        alignItems: "top",
        width: "100%",
        gap: 10,
        image: {
            width: wp(21),
            height: hp(11.5),
            borderRadius: 12,
        },
        textDiv: {
            width: wp(67.5),
            title: {
                color: "#000000",
                fontFamily: "BricolageLight",
                fontSize: 14,
                letterSpacing: 0.2,
            },
            content: {
                color: "rgba(0,0,0,0.8)",
                paddingBottom: hp(0.7),
                paddingTop: hp(0.5),
                fontFamily: "BricolageLight",
                fontSize: 11,
                letterSpacing: 0.1,
            },
            date: {
                color: "rgba(0,0,0,0.65)",
                fontFamily: "BricolageLight",
                fontSize: 9,
                letterSpacing: 0.3,
            },
        },
    },
} as any);

export default SingleNewsCard;
