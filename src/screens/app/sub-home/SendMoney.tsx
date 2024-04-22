import {
    Platform,
    NativeModules,
    ScrollView,
    Text,
    View,
    StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalScrollViewStyle } from "../../../styles/const";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
import { sendMethods } from "../../../data/homeMethodsList";
import { HomeMethodsType } from "../../../utils/types";
import HomeMethodCard from "../../../components/card/HomeMethodCard";
import { fundWalletStyle } from "../../../styles/homeStyle";
const StatusBarManager = NativeModules;

const SendMoneyScreen = () => {
    return (
        <SafeAreaView
            style={{
                ...styles.fundWalletScreen,
                paddingTop:
                    Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
            }}
        >
            <NavigationHeaderBar title="Send" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.fundWalletScreen.firstSection}>
                    <Text style={styles.fundWalletScreen.firstSection.infoText}>
                        Choose which wallet you would like to Transfer Funds
                        from
                    </Text>
                </View>
                <View style={styles.fundWalletScreen.otherMethodSection}>
                    <View
                        style={
                            styles.fundWalletScreen.otherMethodSection
                                .methodList
                        }
                    >
                        {sendMethods.map(
                            (method: HomeMethodsType, index: number) => {
                                return (
                                    <HomeMethodCard
                                        key={index}
                                        method={method}
                                    />
                                );
                            }
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(fundWalletStyle);

export default SendMoneyScreen;
