import {
    Image,
    NativeModules,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { newsStyle } from "../../../styles/homeStyle";
import { globalScrollViewStyle } from "../../../styles/const";
import NavigationHeaderBar from "../../../components/tab/NavigationHeaderBar";
const { StatusBarManager } = NativeModules;

const SingleNewsScreen = () => {
    return (
        <>
            <SafeAreaView
                style={{
                    ...styles.newsScreen,
                    paddingTop:
                        Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
                }}
            >
                <NavigationHeaderBar title="Single News" />
                <ScrollView style={globalScrollViewStyle}>
                    <View style={styles.newsScreen.headerNews}>
                        <View style={styles.newsScreen.headerNews.post}>
                            <Image
                                source={require("../../../assets/images/news/header.jpg")}
                                style={styles.newsScreen.headerNews.post.image}
                            />
                            <Text
                                style={styles.newsScreen.headerNews.post.title}
                            >
                                Why we have exactly the fuel we need for a
                                year-end rally
                            </Text>
                            <Text
                                style={styles.newsScreen.headerNews.post.date}
                            >
                                Dec 13 / Finance
                            </Text>
                        </View>
                    </View>
                    <View style={styles.newsScreen.singleNewsContent}></View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create(newsStyle);
// const globalstyles = StyleSheet.create(globalStyle);

export default SingleNewsScreen;
