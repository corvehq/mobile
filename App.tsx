import { useFonts } from "expo-font";
import { Platform, Text, TextProps } from "react-native";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import AppNavigation from "./src/route";

const defaultProps: TextProps = {
    allowFontScaling: false,
};

const App = () => {
    const [loaded] = useFonts({
        Bricolage: require("./src/assets/fonts/sfregular.otf"),
        BricolageLight: require("./src/assets/fonts/sflight.otf"),
        SFBold: require("./src/assets/fonts/sfbold.otf"),
        LatoBold: require("./src/assets/fonts/Lato-Bold.ttf"),
        Inter: require("./src/assets/fonts/inter-regular.otf"),
    });

    if (Platform.OS === "android") {
        NavigationBar.setBackgroundColorAsync("#ffffff");
    }

    if (!loaded) {
        return <Text style={{ fontSize: 30 }}>Loading...</Text>;
    }

    return (
        <>
            <GestureHandlerRootView
                style={{
                    flex: 1,
                }}
            >
                <StatusBar style="dark" backgroundColor="#ffffff" />
                <AppNavigation />
                <Toast topOffset={53} />
            </GestureHandlerRootView>
        </>
    );
};

export default App;
