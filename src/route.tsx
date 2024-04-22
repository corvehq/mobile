import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import HomeScreen from "./screens/app/Home";
import FundWalletScreen from "./screens/app/sub-home/FundWallet";
import SendMoneyScreen from "./screens/app/sub-home/SendMoney";
import QRCodeScreen from "./screens/app/sub-home/QRCode";
import RequestPaymentScreen from "./screens/app/sub-home/RequestPayment";
import SendNairaScreen from "./screens/app/sub-home/send-naira/SendNaira";
import ConfirmTransferScreen from "./screens/app/sub-home/send-naira/ConfirmTransfer";

const Stack = createStackNavigator();
const TransitionScreenOptions = {
    headerShown: false,
    gestureEnabled: false,
    ...TransitionPresets.SlideFromRightIOS,
};

const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={TransitionScreenOptions}
                >
                    {/* App Screens */}
                    <Stack.Group>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen
                            name="FundWallet"
                            component={FundWalletScreen}
                        />
                        <Stack.Screen
                            name="SendScreen"
                            component={SendMoneyScreen}
                        />
                        <Stack.Screen name="QRCode" component={QRCodeScreen} />
                        <Stack.Screen
                            name="RequestPayment"
                            component={RequestPaymentScreen}
                        />

                        {/* Send Naira Screens */}
                        <Stack.Screen
                            name="SendNaira"
                            component={SendNairaScreen}
                        />
                        <Stack.Screen
                            name="ConfirmTransfer"
                            component={ConfirmTransferScreen}
                        />
                        {/* End of Send Naira Screens */}
                    </Stack.Group>
                    {/* End of App Screens */}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default AppNavigation;
