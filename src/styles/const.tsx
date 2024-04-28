// import { Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP,
} from "react-native-responsive-screen";

// export const defaultMainFont =
//     Platform.OS === "android" ? "Bricolage" : "SFBold";

export const defaultMainFont = "Bricolage";
export const defaultAccentColor = "#7FC014";
export const defaultAppColor = "#FFFFFF";
export const defaultAppBlack = "#111111";
export const defaultAppGreen = "#162302";
export const defaultButtonHeight = 59;
export const globalSidePadding = 20;
export const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const globalScrollViewStyle: any = {
    width: "100%",
    paddingBottom: hp(25),
};

export const globalFullButtonStyle: any = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: defaultButtonHeight,
    backgroundColor: defaultAccentColor,
    width: "100%",
    borderRadius: 11,
    text: {
        fontSize: 20,
        fontFamily: "BricolageLight",
        letterSpacing: 0.2,
        color: "#ffffff",
    },
};
