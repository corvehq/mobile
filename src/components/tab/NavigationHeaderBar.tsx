import { Text, Pressable, View, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Nav } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";
import CancelIcon from "../../assets/icons/CancelIcon";

const NavigationHeaderBar = ({
    title,
    useCancel,
    backAction,
}: {
    title?: string;
    useCancel?: boolean;
    backAction?: string;
}) => {
    const { navigate, goBack } = useNavigation<Nav>();

    const onBackAction = () => {
        if (backAction) {
            navigate(backAction);
        } else {
            goBack();
        }
    };

    return (
        <View style={styles.navigationHeaderBar}>
            <Pressable
                style={styles.navigationHeaderBar.arrowButton}
                onPress={onBackAction}
            >
                {useCancel ? (
                    <CancelIcon pressFunction={onBackAction} />
                ) : (
                    <ChevronLeftIcon size={{ width: "40", height: "40" }} />
                )}
            </Pressable>
            <Text style={styles.navigationHeaderBar.titleText}>
                {title ? title : "Navigation"}
            </Text>
            <Pressable
                style={{
                    ...styles.navigationHeaderBar.arrowButton,
                    opacity: 0,
                }}
            >
                <ChevronLeftIcon size={{ width: "33", height: "33" }} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    navigationHeaderBar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: hp(1.5),
        paddingBottom: hp(1.5),
        paddingLeft: wp(1),
        paddingRight: wp(1),
        arrowButton: {
            width: wp(12),
            height: hp(5.5),
            paddingRight: wp(0.7),
            backgroundColor: "rgba(0,0,0,0.0)",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            paddingTop: 3,
        },
        titleText: {
            color: "rgba(0,0,0,0.9)",
            fontFamily: "BricolageLight",
            fontSize: 20,
            letterSpacing: 0.4,
            textAlign: "center",
        },
    },
} as any);

export default NavigationHeaderBar;
