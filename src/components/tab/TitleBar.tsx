import { View, Pressable, StyleSheet, Text } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const TitleBar = ({ title }: { title?: string }) => {
    return (
        <View style={styles.titleBar}>
            <Pressable></Pressable>
            <Text style={styles.titleBar.titleText}>{title}</Text>
            <Pressable></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    titleBar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: hp(2),
        paddingBottom: hp(2),
        paddingLeft: wp(2),
        paddingRight: wp(2),
        // arrowButton: {
        //     width: wp(12),
        //     height: hp(6),
        //     backgroundColor: "#111111",
        //     flexDirection: "row",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     borderRadius: 60,
        // },
        titleText: {
            color: "rgba(0,0,0,0.9)",
            fontFamily: "BricolageLight",
            fontSize: 20,
            letterSpacing: 0.4,
            textAlign: "center",
        },
    },
} as any);

export default TitleBar;
