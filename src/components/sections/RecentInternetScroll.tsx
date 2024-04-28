import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import AddIcon from "../../assets/icons/AddIcon";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { defaultAccentColor } from "../../styles/const";
import { recentInternetBill } from "../../data/recentInternetBill";

const RecentInternetScroll = ({
    fillDetailsWithRecent,
}: {
    fillDetailsWithRecent: any;
}) => {
    return (
        <View style={styles.benficiariesScroll}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.benficiariesScroll.list}
            >
                <Pressable style={styles.benficiariesScroll.list.actionButton}>
                    <Pressable
                        style={{
                            ...styles.benficiariesScroll.list.actionButton
                                .iconButton,
                            borderWidth: 1.5,
                            borderColor: defaultAccentColor,
                        }}
                    >
                        <AddIcon color={defaultAccentColor} />
                    </Pressable>
                    <Text
                        style={
                            styles.benficiariesScroll.list.actionButton.network
                        }
                    >
                        Select
                    </Text>
                    <Text
                        style={
                            styles.benficiariesScroll.list.actionButton.number
                        }
                    >
                        Beneficiary
                    </Text>
                </Pressable>
                {recentInternetBill.map((recent, index: number) => {
                    return (
                        <Pressable
                            style={styles.benficiariesScroll.list.actionButton}
                            key={index}
                            onPress={() => fillDetailsWithRecent(recent)}
                        >
                            <Pressable
                                style={
                                    styles.benficiariesScroll.list.actionButton
                                        .iconButton
                                }
                                onPress={() => fillDetailsWithRecent(recent)}
                            >
                                <Image
                                    source={recent.providerImage}
                                    style={
                                        styles.benficiariesScroll.list
                                            .actionButton.iconButton.image
                                    }
                                    resizeMode="center"
                                />
                            </Pressable>
                            <Text
                                style={
                                    styles.benficiariesScroll.list.actionButton
                                        .network
                                }
                            >
                                {recent.provider.toUpperCase()}
                            </Text>
                            <Text
                                style={
                                    styles.benficiariesScroll.list.actionButton
                                        .number
                                }
                            >
                                {recent.accountId.slice(0, 8)}...
                            </Text>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    benficiariesScroll: {
        width: "100%",
        paddingTop: hp(1),
        paddingBottom: hp(2.5),
        paddingLeft: wp(1),
        paddingRight: wp(1),
        list: {
            flexDirection: "row",
            paddingTop: hp(1),
            paddingBottom: hp(1),
            actionButton: {
                marginRight: wp(6),
                flexDirection: "column",
                alignItems: "center",
                iconButton: {
                    width: 55,
                    height: 55,
                    borderRadius: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.02)",
                    image: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 60,
                        borderColor: "rgba(0,0,0,0.1)",
                        borderWidth: 1.5,
                    },
                },
                network: {
                    textAlign: "center",
                    paddingTop: hp(0.8),
                    fontSize: 12,
                    fontFamily: "BricolageLight",
                    letterSpacing: 0.2,
                    color: "rgba(0,0,0,0.8)",
                },
                number: {
                    textAlign: "center",
                    paddingTop: hp(0.1),
                    fontSize: 13,
                    fontFamily: "BricolageLight",
                    letterSpacing: 0.3,
                    color: "rgba(0,0,0,0.95)",
                },
            },
        },
    },
} as any);

export default RecentInternetScroll;
