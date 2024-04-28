import {
    Platform,
    ScrollView,
    StyleSheet,
    NativeModules,
    View,
    FlatList,
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
import TitleBar from "../../../components/tab/TitleBar";
import { settingsList } from "../../../data/settingsList";
import ToggleButton from "react-native-toggle-element";
import { useState } from "react";
import SendENairaIcon from "../../../assets/icons/SendENairaIcon";
import SendNairaIcon from "../../../assets/icons/SendNairaIcon";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../../../utils/types";
import ChevronRightIcon from "../../../assets/icons/ChevronRightIcon";

const SettingScreen = () => {
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
            <TitleBar title="Settings" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.settingScreen.screenContent}>
                    <View style={styles.settingScreen.screenContent.linkList}>
                        {settingsList.map((setting, index: number) => {
                            return (
                                <Pressable
                                    key={index}
                                    style={
                                        styles.settingScreen.screenContent
                                            .linkList.link
                                    }
                                    onPress={() =>
                                        actionFunction(
                                            setting.toggle,
                                            setting.routeTitle
                                        )
                                    }
                                >
                                    <Text
                                        style={
                                            styles.settingScreen.screenContent
                                                .linkList.link.text
                                        }
                                    >
                                        {setting.title}
                                    </Text>
                                    <Pressable
                                        style={
                                            styles.settingScreen.screenContent
                                                .linkList.link.button
                                        }
                                        onPress={() =>
                                            actionFunction(
                                                setting.toggle,
                                                setting.routeTitle
                                            )
                                        }
                                    >
                                        {setting.toggle ? (
                                            <ToggleButton
                                                value={toggleValue}
                                                onPress={(newState: any) =>
                                                    setToggleValue(newState)
                                                }
                                                thumbActiveComponent={
                                                    <SendNairaIcon />
                                                }
                                                thumbInActiveComponent={
                                                    <SendENairaIcon />
                                                }
                                                trackBar={{
                                                    activeBackgroundColor:
                                                        "#9ee3fb",
                                                    inActiveBackgroundColor:
                                                        "#3c4145",
                                                    borderActiveColor:
                                                        "#86c3d7",
                                                    borderInActiveColor:
                                                        "#1c1c1c",
                                                    borderWidth: 5,
                                                    width: 80,
                                                }}
                                            />
                                        ) : (
                                            <ChevronRightIcon
                                                color={defaultAccentColor}
                                            />
                                        )}
                                    </Pressable>
                                </Pressable>
                            );
                        })}
                    </View>
                    <View
                        style={
                            styles.settingScreen.screenContent.logoutContainer
                        }
                    >
                        <Pressable
                            style={
                                styles.settingScreen.screenContent
                                    .logoutContainer.button
                            }
                        >
                            <Text
                                style={
                                    styles.settingScreen.screenContent
                                        .logoutContainer.button.text
                                }
                            >
                                Sign out
                            </Text>
                            <ChevronRightIcon color="rgba(255, 31, 31, 1)" />
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            <BottomTab />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(settingStyle);

export default SettingScreen;
