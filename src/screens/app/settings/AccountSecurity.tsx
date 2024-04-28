import {
    Platform,
    ScrollView,
    StyleSheet,
    View,
    Pressable,
    Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    defaultAccentColor,
    globalScrollViewStyle,
} from "../../../styles/const";
import BottomTab from "../../../components/tab/BottomTab";
import { settingStyle } from "../../../styles/homeStyle";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Nav, SecurityCredType } from "../../../utils/types";
import ChevronRightIcon from "../../../assets/icons/ChevronRightIcon";
import { securityCredList } from "../../../data/securityCredList";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";

const AccountSecurityScreen = () => {
    const { navigate } = useNavigation<Nav>();
    const [toggleValue, setToggleValue] = useState(false);

    const actionFunction = (toggle: boolean, route: string) => {
        if (toggle) {
            setToggleValue(!toggleValue);
        } else {
            navigate(route);
        }
    };

    return (
        <SafeAreaView
            style={{
                ...styles.settingScreen,
                paddingTop: Platform.OS === "android" ? 5 : 0,
            }}
        >
            <NavigationHeaderBar title="Account Security" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.settingScreen.screenContent}>
                    <View style={styles.settingScreen.screenContent.linkList}>
                        {securityCredList.map(
                            (security: SecurityCredType, index: number) => {
                                return (
                                    <Pressable
                                        key={index}
                                        style={
                                            styles.settingScreen.screenContent
                                                .linkList.link
                                        }
                                        onPress={() =>
                                            actionFunction(
                                                security.toggle,
                                                security.screen
                                            )
                                        }
                                    >
                                        <Text
                                            style={
                                                styles.settingScreen
                                                    .screenContent.linkList.link
                                                    .text
                                            }
                                        >
                                            {security.title}
                                        </Text>
                                        <Pressable
                                            style={
                                                styles.settingScreen
                                                    .screenContent.linkList.link
                                                    .button
                                            }
                                            onPress={() =>
                                                actionFunction(
                                                    security.toggle,
                                                    security.screen
                                                )
                                            }
                                        >
                                            <ChevronRightIcon
                                                color={defaultAccentColor}
                                            />
                                        </Pressable>
                                    </Pressable>
                                );
                            }
                        )}
                    </View>
                </View>
            </ScrollView>
            <BottomTab />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(settingStyle);

export default AccountSecurityScreen;
