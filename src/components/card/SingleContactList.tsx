import { LegacyRef } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RBSheetRef } from "react-native-raw-bottom-sheet";

const SingleContactList = ({
    contact,
    setSelectedContact,
    contactListSheet,
}: {
    contact: any;
    setSelectedContact: any;
    contactListSheet: LegacyRef<RBSheetRef> | any;
}) => {
    return (
        <Pressable
            style={styles.singleContactList}
            onPress={() => {
                setSelectedContact(contact.phoneNumbers[0].number);
                contactListSheet.current.close();
            }}
        >
            <Pressable style={styles.singleContactList.imageDiv}>
                {contact.imageAvailable ? (
                    <Image
                        source={require("../../assets/images/avatars/man1.png")}
                        style={styles.singleContactList.imageDiv.image}
                    />
                ) : (
                    <Image
                        source={require("../../assets/images/avatars/man2.png")}
                        style={styles.singleContactList.imageDiv.image}
                    />
                )}
            </Pressable>
            <View style={styles.singleContactList.textDiv}>
                <Text style={styles.singleContactList.textDiv.fullName}>
                    {contact.firstName} {contact.middleName}
                    {contact.lastName}
                </Text>
                <Text style={styles.singleContactList.textDiv.phoneNumber}>
                    {contact.phoneNumbers[0].number}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    singleContactList: {
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        imageDiv: {
            image: {
                width: 45,
                height: 45,
                borderRadius: 60,
            },
        },
        textDiv: {
            fullName: {
                fontSize: 19,
                paddingTop: 2,
                paddingBottom: 2,
                fontFamily: "BricolageLight",
                letterSpacing: 0.4,
                color: "#000000",
            },
            phoneNumber: {
                fontSize: 14,
                paddingTop: 2,
                paddingBottom: 2,
                fontFamily: "BricolageLight",
                letterSpacing: 0.4,
                color: "rgba(0,0,0,0.75)",
            },
        },
    },
} as any);

export default SingleContactList;
