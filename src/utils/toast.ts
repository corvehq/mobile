import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Toast from "react-native-toast-message";

export const toastNotification = (
    type: string,
    text1: string,
    text2: string
) => {
    Toast.show({
        type,
        text1,
        text2,
        text1Style: {
            fontSize: 22,
            fontFamily: "BricolageLight",
            letterSpacing: 0.5,
            color: "#000000",
        },
        text2Style: {
            fontFamily: "BricolageLight",
            fontSize: 17,
            letterSpacing: 0.3,
        },
    });
};
