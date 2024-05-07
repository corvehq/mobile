import { Pressable, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useRoute, useNavigation } from "@react-navigation/native";
import { bottomTabButtons } from "../../data/bottomTabButtons";
import { BottomTabButtonTypes, Nav } from "../../utils/types";
import { defaultAppGreen } from "../../styles/const";

function BottomTab() {
    const { name } = useRoute();
    const { navigate } = useNavigation<Nav>();

    return (
        <View style={styles.bottomTab}>
            {bottomTabButtons.map(
                (button: BottomTabButtonTypes, index: number) => {
                    const active = name === button.routeTitle ? true : false;
                    return (
                        <Pressable
                            style={styles.bottomTab.tabButton}
                            key={index}
                            onPress={() => navigate(button.routeTitle)}
                        >
                            <Pressable
                                style={
                                    button.routeTitle === "ScanCode"
                                        ? styles.bottomTab.tabButton
                                              .bigIconButton
                                        : {}
                                }
                                onPress={() => navigate(button.routeTitle)}
                            >
                                {button.icon(active)}
                            </Pressable>
                            {/* <Text
                                style={
                                    name === button.routeTitle
                                        ? styles.bottomTab.tabButton.activeText
                                        : styles.bottomTab.tabButton.text
                                }
                            >
                                {button.title}
                            </Text> */}
                        </Pressable>
                    );
                }
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    bottomTab: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 3,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderTopWidth: 0.5,
        borderColor: "rgba(0,0,0,0.15)",
        backgroundColor: "#ffffff",
        tabButton: {
            padding: 15,
            alignItems: "center",
            text: {
                color: "#878787",
                textAlign: "center",
                paddingTop: 4,
                fontFamily: "BricolageLight",
                letterSpacing: 0.3,
                fontSize: 11,
            },
            activeText: {
                color: defaultAppGreen,
                textAlign: "center",
                paddingTop: 4,
                fontFamily: "BricolageLight",
                letterSpacing: 0.3,
                fontSize: 11,
            },
            bigIconButton: {
                width: 60,
                height: 60,
                borderRadius: 60,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000000",
            },
        },
    },
} as any);

export default BottomTab;
