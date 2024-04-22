import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { beneficiaryList } from "../../data/beneficiariesList";
import { BeneficiaryTypes } from "../../utils/types";
import AddIcon from "../../assets/icons/AddIcon";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { defaultAccentColor } from "../../styles/const";

const BeneficiariesScroll = () => {
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
                        style={styles.benficiariesScroll.list.actionButton.text}
                    >
                        Add
                    </Text>
                </Pressable>
                {beneficiaryList.map(
                    (beneficiary: BeneficiaryTypes, index: number) => {
                        return (
                            <Pressable
                                style={
                                    styles.benficiariesScroll.list.actionButton
                                }
                                key={index}
                            >
                                <Pressable
                                    style={
                                        styles.benficiariesScroll.list
                                            .actionButton.iconButton
                                    }
                                >
                                    <Image
                                        source={beneficiary.image}
                                        style={
                                            styles.benficiariesScroll.list
                                                .actionButton.iconButton.image
                                        }
                                    />
                                </Pressable>
                                <Text
                                    style={
                                        styles.benficiariesScroll.list
                                            .actionButton.text
                                    }
                                >
                                    {beneficiary.name}
                                </Text>
                            </Pressable>
                        );
                    }
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    benficiariesScroll: {
        width: "100%",
        paddingTop: hp(2.5),
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
                    width: 52,
                    height: 52,
                    borderRadius: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.02)",
                    image: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 60,
                    },
                },
                text: {
                    textAlign: "center",
                    paddingTop: hp(0.4),
                    fontSize: 13,
                    fontFamily: "BricolageLight",
                    letterSpacing: 0.3,
                    color: "rgba(0,0,0,0.7)",
                },
            },
        },
    },
} as any);

export default BeneficiariesScroll;
