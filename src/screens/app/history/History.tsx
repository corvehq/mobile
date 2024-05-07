import {
    NativeModules,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
const { StatusBarManager } = NativeModules;
import { useRef } from "react";
import FilterBottomSheet from "../../../components/bottomsheet/FilterBottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTab from "../../../components/tab/BottomTab";
import FilterIcon from "../../../assets/icons/FilterIcon";
import { activityList } from "../../../data/activityList";
import ActivityCard from "../../../components/card/ActivityCard";
import { historyStyle } from "../../../styles/homeStyle";

const HistoryScreen = () => {
    const filterSheet: any = useRef();

    return (
        <>
            <SafeAreaView
                style={{
                    ...styles.historyScreen,
                    paddingTop:
                        Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
                }}
            >
                <View style={styles.historyScreen.headerBar}>
                    <Text style={styles.historyScreen.headerBar.titleText}>
                        Transactions
                    </Text>
                    <Pressable
                        style={styles.historyScreen.headerBar.filterButton}
                        onPress={() => {
                            filterSheet.current.open();
                        }}
                    >
                        <FilterIcon
                            size={{ width: "15", height: "15" }}
                            color="#000000"
                        />
                        <Text
                            style={
                                styles.historyScreen.headerBar.filterButton.text
                            }
                        >
                            Filter by
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.historyScreen.historyList}>
                    <ScrollView
                        style={{ width: "100%" }}
                        showsVerticalScrollIndicator={false}
                    >
                        {activityList.map((activity: any, index: number) => {
                            return (
                                <ActivityCard key={index} activity={activity} />
                            );
                        })}
                    </ScrollView>
                </View>
                <FilterBottomSheet filterSheet={filterSheet} />
            </SafeAreaView>
            <BottomTab />
        </>
    );
};

const styles = StyleSheet.create(historyStyle);

export default HistoryScreen;
