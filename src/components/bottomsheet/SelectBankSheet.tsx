import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { nigerianBanks } from "../../data/nigerianBanks";
import { useState } from "react";
import { BankListTypes } from "../../utils/types";
import { createFilter } from "../../utils/arrayFilter";
import { Image } from "expo-image";
import { blurhash } from "../../styles/const";

const SelectBankSheet = ({
    selectBankSheet,
    setSelectedBank,
}: {
    selectBankSheet: any;
    setSelectedBank: any;
}) => {
    const [searchInput, setSearchInput] = useState("");
    const KEYS_TO_FILTERS = ["name", "code"];

    const filteredBanks = nigerianBanks.filter(
        createFilter(searchInput, KEYS_TO_FILTERS)
    );

    return (
        <>
            <RBSheet
                customStyles={{
                    ...styles.bankBottomSheet,
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
                height={hp(90)}
                openDuration={150}
                closeDuration={150}
                ref={selectBankSheet}
                draggable
            >
                <View style={styles.bankBottomSheet.sheetContent}>
                    <Text style={styles.bankBottomSheet.sheetContent.title}>
                        Select Bank
                    </Text>
                    <View
                        style={styles.bankBottomSheet.sheetContent.searchBarDiv}
                    >
                        <TextInput
                            placeholder="🔍 Search"
                            style={
                                styles.bankBottomSheet.sheetContent.searchBarDiv
                                    .input
                            }
                            placeholderTextColor="#B6B6B6"
                            value={searchInput}
                            onChangeText={(e) => setSearchInput(e)}
                        />
                    </View>
                    <ScrollView
                        style={styles.bankBottomSheet.sheetContent.bankList}
                        showsVerticalScrollIndicator={false}
                    >
                        {filteredBanks.map(
                            (bank: BankListTypes, index: number) => {
                                return (
                                    <Pressable
                                        style={
                                            styles.bankBottomSheet.sheetContent
                                                .bankList.singleBank
                                        }
                                        key={index}
                                        onPress={() => {
                                            setSelectedBank(bank);
                                            selectBankSheet.current.close();
                                        }}
                                    >
                                        <Image
                                            style={
                                                styles.bankBottomSheet
                                                    .sheetContent.bankList
                                                    .singleBank.image
                                            }
                                            source={bank.logo}
                                            placeholder={blurhash}
                                            contentFit="cover"
                                            transition={1000}
                                            priority="high"
                                        />
                                        <Text
                                            style={
                                                styles.bankBottomSheet
                                                    .sheetContent.bankList
                                                    .singleBank.text
                                            }
                                        >
                                            {bank.name}
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
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
            paddingBottom: hp(18),
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

export default SelectBankSheet;
