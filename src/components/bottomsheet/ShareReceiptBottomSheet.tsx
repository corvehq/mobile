import RBSheet from "react-native-raw-bottom-sheet";
import {
    defaultAccentColor,
    sheetBackgroundColor,
    sheetBorderRadius,
    sheetDraggableColor,
} from "../../styles/const";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Pressable, StyleSheet, Text, View } from "react-native";
import GalleryIcon from "../../assets/icons/GalleryIcon";
import DocumentIcon from "../../assets/icons/DocumentIcon";

const ShareReceiptBottomSheet = ({
    shareReceiptSheet,
}: {
    shareReceiptSheet: any;
}) => {
    return (
        <RBSheet
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(0,0,0,0.25)",
                    padding: 0,
                },
                draggableIcon: {
                    backgroundColor: sheetDraggableColor,
                },
                container: {
                    backgroundColor: sheetBackgroundColor,
                    borderRadius: sheetBorderRadius,
                },
            }}
            customModalProps={{
                animationType: "slide",
                statusBarTranslucent: true,
            }}
            height={hp(17)}
            openDuration={100}
            closeDuration={100}
            ref={shareReceiptSheet}
            draggable
        >
            <View style={styles.contentDiv}>
                <View style={styles.contentDiv.buttonsDiv}>
                    <Pressable style={styles.contentDiv.buttonsDiv.button}>
                        <Pressable
                            style={styles.contentDiv.buttonsDiv.button.icon}
                        >
                            <DocumentIcon />
                        </Pressable>
                        <Text style={styles.contentDiv.buttonsDiv.button.text}>
                            Download PDF
                        </Text>
                    </Pressable>
                    <Pressable style={styles.contentDiv.buttonsDiv.button}>
                        <Pressable
                            style={styles.contentDiv.buttonsDiv.button.icon}
                        >
                            <GalleryIcon />
                        </Pressable>
                        <Text style={styles.contentDiv.buttonsDiv.button.text}>
                            Download Image
                        </Text>
                    </Pressable>
                </View>
            </View>
        </RBSheet>
    );
};

const styles = StyleSheet.create({
    contentDiv: {
        paddingTop: hp(1.2),
        paddingLeft: 80,
        paddingRight: 80,
        buttonsDiv: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            button: {
                alignItems: "center",
                icon: {
                    width: 45,
                    height: 45,
                    borderRadius: 60,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: defaultAccentColor,
                },
                text: {
                    fontSize: 13,
                    fontFamily: "Bricolage",
                    letterSpacing: 0.2,
                    color: "#000000",
                    textAlign: "center",
                    paddingTop: hp(1),
                },
            },
        },
    },
} as any);

export default ShareReceiptBottomSheet;
