import { Image, StyleSheet, View } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const AdBoardCard = () => {
    return (
        <View style={styles.adBoardCard}>
            <Image
                source={require("../../assets/images/adboard/ad-image.png")}
                style={styles.adBoardCard.image}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    adBoardCard: {
        paddingTop: hp(2.5),
        paddingBottom: hp(2.5),
        paddingLeft: wp(4),
        paddingRight: wp(4),
        image: {
            width: "100%",
            height: 175,
            borderRadius: 15,
            backgroundColor: "red",
        },
    },
} as any);

export default AdBoardCard;
