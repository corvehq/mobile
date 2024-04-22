import {
    Platform,
    NativeModules,
    ScrollView,
    Text,
    View,
    StyleSheet,
    Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalScrollViewStyle } from "../../../styles/const";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
import HomeIcon from "../../../assets/icons/HomeIcon";
import { otherFundMethods } from "../../../data/homeMethodsList";
import { HomeMethodsType } from "../../../utils/types";
import HomeMethodCard from "../../../components/card/HomeMethodCard";
import { fundWalletStyle } from "../../../styles/homeStyle";
const StatusBarManager = NativeModules;

const FundWalletScreen = () => {
    return (
        <SafeAreaView
            style={{
                ...styles.fundWalletScreen,
                paddingTop:
                    Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
            }}
        >
            <NavigationHeaderBar title="Fund your wallet" />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.fundWalletScreen.firstSection}>
                    <Text style={styles.fundWalletScreen.firstSection.infoText}>
                        Use the details below to transfer money into your ****
                        account
                    </Text>
                    <View
                        style={styles.fundWalletScreen.firstSection.bankDetails}
                    >
                        <Pressable
                            style={
                                styles.fundWalletScreen.firstSection.bankDetails
                                    .icon
                            }
                        >
                            <HomeIcon size={{ height: "20", width: "20" }} />
                        </Pressable>
                        <View
                            style={
                                styles.fundWalletScreen.firstSection.bankDetails
                                    .textDiv
                            }
                        >
                            <Text
                                style={
                                    styles.fundWalletScreen.firstSection
                                        .bankDetails.textDiv.bankName
                                }
                            >
                                Providus Bank
                            </Text>
                            <Text
                                style={
                                    styles.fundWalletScreen.firstSection
                                        .bankDetails.textDiv.accountNumber
                                }
                            >
                                024 316 4724
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.fundWalletScreen.otherMethodSection}>
                    <Text
                        style={
                            styles.fundWalletScreen.otherMethodSection.titleText
                        }
                    >
                        Other Fund Methods
                    </Text>
                    <View
                        style={
                            styles.fundWalletScreen.otherMethodSection
                                .methodList
                        }
                    >
                        {otherFundMethods.map(
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

export default FundWalletScreen;
