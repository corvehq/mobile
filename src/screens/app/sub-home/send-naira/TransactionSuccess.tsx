import {
    Platform,
    NativeModules,
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    Pressable,
    useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { transactionSuccessStyle } from "../../../../styles/homeStyle";
import { globalScrollViewStyle } from "../../../../styles/const";
import NavigationHeaderBar from "../../../../components/tab/NavigationHeaderBar";
const StatusBarManager = NativeModules;
import { RenderHTML } from "react-native-render-html";

const TransactionSuccessScreen = ({ route }: { route: any }) => {
    const { width } = useWindowDimensions();
    const { data } = route.params;

    return (
        <SafeAreaView
            style={{
                ...styles.transactionSuccessScreen,
                paddingTop:
                    Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
            }}
        >
            <NavigationHeaderBar title="Transaction Successful" useCancel />
            <ScrollView style={globalScrollViewStyle}>
                <View style={styles.transactionSuccessScreen.screenContent}>
                    <View
                        style={
                            styles.transactionSuccessScreen.screenContent
                                .imageDiv
                        }
                    >
                        <Image
                            source={require("../../../../assets/images/notifications/success.png")}
                            style={
                                styles.transactionSuccessScreen.screenContent
                                    .imageDiv.image
                            }
                        />
                    </View>
                    <View
                        style={
                            styles.transactionSuccessScreen.screenContent
                                .textDiv
                        }
                    >
                        <RenderHTML
                            contentWidth={width - 10}
                            source={{ html: data.successComponent }}
                        />
                    </View>
                    <View
                        style={
                            styles.transactionSuccessScreen.screenContent
                                .buttonDiv
                        }
                    >
                        <Pressable
                            style={
                                styles.transactionSuccessScreen.screenContent
                                    .buttonDiv.button
                            }
                        >
                            <Text
                                style={
                                    styles.transactionSuccessScreen
                                        .screenContent.buttonDiv.button.text
                                }
                            >
                                Share Receipt
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(transactionSuccessStyle);

export default TransactionSuccessScreen;
