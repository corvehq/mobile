import { ScrollView, StyleSheet, Text, View } from "react-native";
import RBSheet, { RBSheetRef } from "react-native-raw-bottom-sheet";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { LegacyRef } from "react";
import SingleContactList from "../card/SingleContactList";

const ContactListSheet = ({
    contactListSheet,
    setSelectedContact,
    contacts,
}: {
    contactListSheet: LegacyRef<RBSheetRef> | any;
    setSelectedContact: any;
    contacts: any[];
}) => {
    return (
        <>
            <RBSheet
                customStyles={{
                    ...styles.bankBottomSheet,
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        padding: wp(0),
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
                dragOnContent
                openDuration={150}
                closeDuration={150}
                ref={contactListSheet}
                draggable
            >
                <View style={styles.bankBottomSheet.sheetContent}>
                    <Text style={styles.bankBottomSheet.sheetContent.title}>
                        Select Contact
                    </Text>
                    <ScrollView
                        style={styles.bankBottomSheet.sheetContent.bankList}
                        showsVerticalScrollIndicator={false}
                    >
                        {contacts.map((contact, index: number) => {
                            console.log("CONTACT: ", contact, "");
                            return (
                                <SingleContactList
                                    contact={contact}
                                    key={index}
                                    setSelectedContact={setSelectedContact}
                                    contactListSheet={contactListSheet}
                                />
                            );
                        })}
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
                fontSize: 19,
                fontWeight: "400",
                letterSpacing: 0.3,
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
                paddingTop: 15,
                paddingBottom: 15,
            },
        },
    },
} as any);

export default ContactListSheet;
