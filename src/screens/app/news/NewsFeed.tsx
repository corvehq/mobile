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
import BottomTab from "../../../components/tab/BottomTab";
import TitleBar from "../../../components/tab/TitleBar";
import { newsList } from "../../../data/newsList";
import SingleNewsCard from "../../../components/card/SingleNewsCard";
import { newsStyle } from "../../../styles/homeStyle";
import { globalScrollViewStyle } from "../../../styles/const";
const { StatusBarManager } = NativeModules;

const NewsFeedScreen = () => {
    return (
        <>
            <SafeAreaView
                style={{
                    ...styles.newsScreen,
                    paddingTop:
                        Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
                }}
            >
                <TitleBar title="Feed" />
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
                    <View style={styles.newsScreen.newsList}>
                        {newsList.map((news, index) => {
                            return <SingleNewsCard key={index} news={news} />;
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
            <BottomTab />
        </>
    );
};

const styles = StyleSheet.create(newsStyle);
// const globalstyles = StyleSheet.create(globalStyle);

export default NewsFeedScreen;
