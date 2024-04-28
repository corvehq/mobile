import { Pressable, StyleSheet, Text, View } from "react-native";
import { profileCredList } from "../../../../data/profileCredList";
import ChevronRightIcon from "../../../../assets/icons/ChevronRightIcon";
import { Nav, ProfileCredType } from "../../../../utils/types";
import { defaultAccentColor } from "../../../../styles/const";
import { useNavigation } from "@react-navigation/native";

const ProfileCredentials = () => {
    const { navigate } = useNavigation<Nav>();

    const navigateToScreen = (screen: string | null) => {
        if (screen) {
            navigate(screen);
        }
    };

    return (
        <View style={styles.profileCredentials}>
            <View style={styles.profileCredentials.credList}>
                {profileCredList.map((cred: ProfileCredType, index: number) => {
                    return (
                        <Pressable
                            style={styles.profileCredentials.singleCredential}
                            key={index}
                            onPress={() => navigateToScreen(cred.screen)}
                        >
                            <View
                                style={
                                    styles.profileCredentials.singleCredential
                                        .textDiv
                                }
                            >
                                <Text
                                    style={
                                        styles.profileCredentials
                                            .singleCredential.textDiv.dataText
                                    }
                                >
                                    {cred.data}
                                </Text>
                                <Text
                                    style={
                                        styles.profileCredentials
                                            .singleCredential.textDiv.titleText
                                    }
                                >
                                    {cred.title}
                                </Text>
                            </View>
                            {cred.screen !== null && (
                                <Pressable
                                    style={
                                        styles.profileCredentials
                                            .singleCredential.icon
                                    }
                                    onPress={() =>
                                        navigateToScreen(cred.screen)
                                    }
                                >
                                    <ChevronRightIcon
                                        color={defaultAccentColor}
                                    />
                                </Pressable>
                            )}
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileCredentials: {
        credList: {
            padding: 10,
        },
        singleCredential: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 10,
            marginBottom: 10,
            textDiv: {
                dataText: {
                    fontFamily: "BricolageLight",
                    letterSpacing: 0.1,
                    fontSize: 19,
                    color: "#000000",
                    paddingTop: 3,
                    paddingBottom: 3,
                },
                titleText: {
                    fontFamily: "BricolageLight",
                    letterSpacing: 0.1,
                    fontSize: 15,
                    color: "rgba(160, 160, 170, 0.8)",
                    paddingTop: 3,
                    paddingBottom: 3,
                },
            },
            icon: {},
        },
    },
} as any);

export default ProfileCredentials;
