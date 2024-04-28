import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import RBSheet, { RBSheetRef } from "react-native-raw-bottom-sheet";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { LegacyRef } from "react";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";

const InternetPlanSheet = ({
    selectPlanSheet,
    setSelectedPlan,
    planList,
    setAmount,
}: {
    selectPlanSheet: LegacyRef<RBSheetRef> | any;
    setSelectedPlan: any;
    planList: any[];
    setAmount: any;
}) => {
    return (
        <>
            <RBSheet
                customStyles={{
                    ...styles.bottomSheet,
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        padding: wp(0.5),
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
                height={hp(45)}
                openDuration={150}
                closeDuration={150}
                ref={selectPlanSheet}
                draggable
            >
                <View style={styles.bottomSheet.sheetContent}>
                    <Text style={styles.bottomSheet.sheetContent.title}>
                        Data Plans
                    </Text>
                    <ScrollView
                        style={styles.bottomSheet.sheetContent.list}
                        showsVerticalScrollIndicator={false}
                    >
                        {planList.map((plan, index: number) => {
                            return (
                                <Pressable
                                    key={index}
                                    style={
                                        styles.bottomSheet.sheetContent.list
                                            .button
                                    }
                                    onPress={() => {
                                        setSelectedPlan(plan);
                                        setAmount(plan.amount);
                                        selectPlanSheet.current.close();
                                    }}
                                >
                                    <Text
                                        style={
                                            styles.bottomSheet.sheetContent.list
                                                .button.text
                                        }
                                    >
                                        {plan.title}
                                    </Text>
                                    <ChevronRightIcon color="rgba(0,0,0,0.5)" />
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
            title: {
                fontSize: 19,
                letterSpacing: 0.5,
                color: "rgba(0,0,0,0.7)",
                textAlign: "center",
                fontFamily: "BricolageLight",
                paddingBottom: 10,
            },
            list: {
                padding: 10,
                paddingTop: 15,
                button: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 15,
                    paddingBottom: 15,
                    text: {
                        fontSize: 17,
                        letterSpacing: 0.3,
                        color: "rgba(0,0,0,0.9)",
                        fontFamily: "BricolageLight",
                    },
                },
            },
        },
    },
} as any);

export default InternetPlanSheet;
