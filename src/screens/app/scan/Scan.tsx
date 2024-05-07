import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera/next";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../../../utils/types";

const ScanScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [sound, setSound] = useState<any>();
    const { navigate } = useNavigation<Nav>();

    async function playSound() {
        console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(
            require("../../../assets/sound/success.mp3")
        );
        setSound(sound);

        console.log("Playing Sound");
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Pressable onPress={requestPermission}>
                    <Text>Grant Permission</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <>
            <View style={styles.container}>
                <CameraView
                    style={styles.camera}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr"],
                    }}
                    facing="back"
                    onBarcodeScanned={async (data) => {
                        playSound().then(() => {
                            navigate("SendENaira", {
                                data: { address: data.data },
                            });
                        });
                    }}
                >
                    {/* <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={playSound}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </Pressable>
                </View> */}
                </CameraView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "red",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
});

export default ScanScreen;
