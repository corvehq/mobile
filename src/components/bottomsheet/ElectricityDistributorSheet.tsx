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
import { LegacyRef } from "react";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import { electricityDistributorList } from "../../data/electricityDistributorList";

const ElectricityDistributorSheet = ({
    edSheet,
    setSelectedED,
}: {
    edSheet: LegacyRef<RBSheetRef> | any;
    setSelectedED: any;
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
                ref={edSheet}
                draggable
            >
                <View style={styles.bottomSheet.sheetContent}>
                    <Text style={styles.bottomSheet.sheetContent.title}>
                        Electricity Distributor
                    </Text>
                    <ScrollView
                        style={styles.bottomSheet.sheetContent.list}
                        showsVerticalScrollIndicator={false}
                    >
                        {electricityDistributorList.map((ed, index: number) => {
                            return (
                                <Pressable
                                    key={index}
                                    style={
                                        styles.bottomSheet.sheetContent.list
                                            .button
                                    }
                                    onPress={() => {
                                        setSelectedED(ed);
                                        edSheet.current.close();
                                    }}
                                >
                                    <Image
                                        source={ed.distributorImage}
                                        resizeMode="center"
                                        style={
                                            styles.bottomSheet.sheetContent.list
                                                .button.image
                                        }
                                    />
                                    <Text
                                        style={
                                            styles.bottomSheet.sheetContent.list
                                                .button.text
                                        }
                                    >
                                        {ed.distributorID.toUpperCase()}
                                    </Text>
                                    <Pressable style={{ marginLeft: "auto" }}>
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
                        fontSize: 16,
                        letterSpacing: 0.4,
                        color: "rgba(0,0,0,0.9)",
                        fontFamily: "BricolageLight",
                    },
                },
            },
        },
    },
} as any);

export default ElectricityDistributorSheet;
