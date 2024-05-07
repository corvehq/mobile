import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import RBSheet, { RBSheetRef } from "react-native-raw-bottom-sheet";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Dispatch, LegacyRef } from "react";
import { AssetListTypes } from "../../utils/types";
import { assetList } from "../../data/assetList";

const SelectAssetSheet = ({
    selectAssetSheet,
    setSelectedAsset,
}: {
    selectAssetSheet: LegacyRef<RBSheetRef> | any;
    setSelectedAsset: Dispatch<AssetListTypes>;
}) => {
    return (
        <>
            <RBSheet
                customStyles={{
                    ...styles.bankBottomSheet,
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
                ref={selectAssetSheet}
                draggable
            >
                <View style={styles.bankBottomSheet.sheetContent}>
                    <Text style={styles.bankBottomSheet.sheetContent.title}>
                        Select Asset
                    </Text>
                    <ScrollView
                        style={styles.bankBottomSheet.sheetContent.bankList}
                        showsVerticalScrollIndicator={false}
                    >
                        {assetList.map(
                            (asset: AssetListTypes, index: number) => {
                                return (
                                    <Pressable
                                        style={
                                            styles.bankBottomSheet.sheetContent
                                                .bankList.singleBank
                                        }
                                        key={index}
                                        onPress={() => {
                                            setSelectedAsset(asset);
                                            selectAssetSheet.current.close();
                                        }}
                                    >
                                        <Pressable
                                            onPress={() => {
                                                setSelectedAsset(asset);
                                                selectAssetSheet.current.close();
                                            }}
                                        >
                                            {asset.symbol}
                                        </Pressable>
                                        <Text
                                            style={
                                                styles.bankBottomSheet
                                                    .sheetContent.bankList
                                                    .singleBank.text
                                            }
                                        >
                                            {asset.asset}
                                        </Text>
                                    </Pressable>
                                );
                            }
                        )}
                    </ScrollView>
                </View>
            </RBSheet>
        </>
    );
};

const styles = StyleSheet.create({
    bankBottomSheet: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        sheetContent: {
            padding: 15,
            alignItems: "stretch",
            title: {
                fontSize: 20,
                fontWeight: "400",
                letterSpacing: 0.5,
                color: "rgba(0,0,0,0.7)",
                textAlign: "center",
                fontFamily: "BricolageLight",
                paddingBottom: 10,
            },
            searchBarDiv: {
                paddingTop: 15,
                paddingBottom: 15,
                input: {
                    borderColor: "rgba(0,0,0,0.1)",
                    borderWidth: 1.2,
                    backgroundColor: "rgba(0,0,0,0.02)",
                    height: hp(6.1),
                    padding: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 12,
                    fontFamily: "BricolageLight",
                    fontSize: 17,
                    letterSpacing: 0.4,
                    fontWeight: "400",
                    color: "#000000",
                },
            },
            bankList: {
                singleBank: {
                    marginTop: hp(0.5),
                    marginBottom: hp(0.5),
                    paddingTop: hp(1.5),
                    paddingBottom: hp(1.5),
                    paddingLeft: wp(2),
                    paddingRight: wp(3),
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                    image: {
                        width: 41,
                        height: 40,
                        borderRadius: 60,
                        borderWidth: 1.5,
                        borderColor: "#eeeeee",
                    },
                    text: {
                        fontFamily: "BricolageLight",
                        fontSize: 17,
                        letterSpacing: 0.4,
                    },
                },
            },
        },
    },
} as any);

export default SelectAssetSheet;
