import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import RBSheet, { RBSheetRef } from "react-native-raw-bottom-sheet";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Dispatch, LegacyRef } from "react";
import { AssetListTypes, Nav } from "../../utils/types";
import { assetList } from "../../data/assetList";
import { metreTypeList } from "../../data/metreTypeList";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import { moreUtilityActions } from "../../data/homeActionButtons";
import { useNavigation } from "@react-navigation/native";

const MoreActionsSheet = ({
    moreActionSheet,
}: {
    moreActionSheet: LegacyRef<RBSheetRef> | any;
}) => {
    const { navigate } = useNavigation<Nav>();
    return (
        <>
            <RBSheet
                customStyles={{
                    ...styles.bottomSheet,
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        padding: 0,
                    },
                    draggableIcon: {
                        backgroundColor: "grey",
                    },
                    container: {
                        backgroundColor: "#f2f2f2",
                        borderRadius: 20,
                    },
                }}
                customModalProps={{
                    animationType: "slide",
                    statusBarTranslucent: true,
                }}
                height={hp(30)}
                openDuration={150}
                closeDuration={150}
                ref={moreActionSheet}
                draggable
            >
                <View style={styles.bottomSheet.sheetContent}>
                    <Text style={styles.bottomSheet.sheetContent.title}>
                        More Utilities
                    </Text>
                    <ScrollView
                        style={styles.bottomSheet.sheetContent.list}
                        showsVerticalScrollIndicator={false}
                    >
                        {moreUtilityActions.map((action, index: number) => {
                            return (
                                <Pressable
                                    key={index}
                                    style={
                                        styles.bottomSheet.sheetContent.list
                                            .button
                                    }
                                    onPress={() => {
                                        moreActionSheet.current.close();
                                        navigate(action.screen);
                                    }}
                                >
                                    {action.icon}
                                    <Text
                                        style={
                                            styles.bottomSheet.sheetContent.list
                                                .button.text
                                        }
                                    >
                                        {action.title}
                                    </Text>
                                    <Pressable
                                        style={{ marginLeft: "auto" }}
                                        onPress={() => {
                                            moreActionSheet.current.close();
                                            navigate(action.screen);
                                        }}
                                    >
                                        <ChevronRightIcon color="rgba(0,0,0,0.5)" />
                                    </Pressable>
                                </Pressable>
                            );
                        })}
                    </ScrollView>
                </View>
            </RBSheet>
        </>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        sheetContent: {
            padding: 15,
            alignItems: "stretch",
            title: {
                fontSize: 19,
                letterSpacing: 0.3,
                color: "rgba(0,0,0,0.8)",
                textAlign: "center",
                fontFamily: "BricolageLight",
                paddingBottom: 10,
            },
            list: {
                padding: 10,
                paddingTop: 15,
                button: {
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingTop: 20,
                    paddingBottom: 20,
                    gap: 10,
                    image: {
                        width: 42,
                        height: 42,
                        borderRadius: 60,
                        borderWidth: 1.5,
                        borderColor: "rgba(0,0,0,0.15)",
                    },
                    text: {
                        fontSize: 17,
                        letterSpacing: 0.3,
                        color: "rgba(0,0,0,0.9)",
                        fontFamily: "BricolageLight",
                        textTransform: "capitalize",
                    },
                },
            },
        },
    },
} as any);

export default MoreActionsSheet;
