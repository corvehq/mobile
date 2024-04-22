import { Pressable, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useRoute, useNavigation } from "@react-navigation/native";
import { bottomTabButtons } from "../../data/bottomTabButtons";
import { Nav } from "../../utils/types";

function BottomTab() {
    const { name } = useRoute();
    const { navigate } = useNavigation<Nav>();

    return (
        <View style={styles.bottomTab}>
            {bottomTabButtons.map((button: any, index: number) => {
                const active = name === button.routeTitle ? true : false;
                return (
                    <Pressable
                        style={styles.bottomTab.tabButton}
                        key={index}
                        onPress={() => navigate(button.routeTitle)}
                    >
                        <Pressable
                            style={styles.bottomTab.tabButton.iconButton}
                            onPress={() => navigate(button.routeTitle)}
                        >
                            {button.icon(active)}
                        </Pressable>
                        <Text
                            style={
                                name === button.routeTitle
                                    ? styles.bottomTab.tabButton.activeText
                                    : styles.bottomTab.tabButton.text
                            }
                        >
                            {button.title}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    bottomTab: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderTopWidth: 0.5,
        borderColor: "rgba(0,0,0,0.25)",
        backgroundColor: "#ffffff",
        tabButton: {
            padding: 10,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 10,
            alignItems: "center",
            iconButton: {},
            text: {
                color: "#878787",
                textAlign: "center",
                paddingTop: 4,
                fontFamily: "BricolageLight",
                letterSpacing: 0.3,
                fontSize: 11,
            },
            activeText: {
                color: "#ffffff",
                textAlign: "center",
                paddingTop: 4,
                fontFamily: "BricolageLight",
                letterSpacing: 0.3,
                fontSize: 11,
            },
        },
    },
} as any);

export default BottomTab;
