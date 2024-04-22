import { Platform, ScrollView, StyleSheet, NativeModules } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeStyle } from "../../styles/homeStyle";
import HomeHeader from "../../components/header/HomeHeader";
import BalanceCard from "../../components/card/BalanceCard";
import ActionButtonsCard from "../../components/card/ActionButtonsCard";
import AdBoardCard from "../../components/card/AdBoardCard";
import RecentTransactions from "../../components/sections/RecentTransactions";
import { globalScrollViewStyle } from "../../styles/const";
import BottomTab from "../../components/tab/BottomTab";
const { StatusBarManager } = NativeModules;

const HomeScreen = () => {
    return (
        <SafeAreaView
            style={{
                ...styles.homeScreen,
                paddingTop: Platform.OS === "android" ? 5 : 0,
            }}
        >
            <ScrollView style={globalScrollViewStyle}>
                <HomeHeader />
                <BalanceCard />
                <ActionButtonsCard />
                <AdBoardCard />
                <RecentTransactions />
            </ScrollView>
            <BottomTab />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(homeStyle);

export default HomeScreen;
