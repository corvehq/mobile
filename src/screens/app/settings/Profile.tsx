import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalScrollViewStyle } from "../../../styles/const";
import BottomTab from "../../../components/tab/BottomTab";
import { settingStyle } from "../../../styles/homeStyle";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
import ProfileHeader from "./components/ProfileHeader";
import UpgradeWarning from "./components/UpgradeWarning";
import ProfileCredentials from "./components/ProfileCredentials";

const ProfileScreen = () => {
    return (
        <SafeAreaView
            style={{
                ...settingStyles.settingScreen,
                paddingTop: Platform.OS === "android" ? 5 : 0,
            }}
        >
            <NavigationHeaderBar title="Profile" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={settingStyles.settingScreen.screenContent}>
                    <ProfileHeader />
                    <UpgradeWarning />
                    <ProfileCredentials />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({} as any);
const settingStyles = StyleSheet.create(settingStyle);

export default ProfileScreen;
