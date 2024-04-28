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
import ConfirmTransactionScreen from "./screens/app/sub-home/send-naira/ConfirmTransaction";
import TransactionSuccessScreen from "./screens/app/sub-home/send-naira/TransactionSuccess";
import SendENairaScreen from "./screens/app/sub-home/send-enaira/SendENaira";
import SettingScreen from "./screens/app/settings/Settings";
import ProfileScreen from "./screens/app/settings/Profile";
import EditNameScreen from "./screens/app/settings/sub-pages/EditAccountName";
import EditEmailScreen from "./screens/app/settings/sub-pages/EditAccountEmail";
import EditAddressScreen from "./screens/app/settings/sub-pages/EditAccountAddress";
import EditNumberScreen from "./screens/app/settings/sub-pages/EditPhoneNumber";
import EditNOKScreen from "./screens/app/settings/sub-pages/EditNextOfKin";
import AccountSecurityScreen from "./screens/app/settings/AccountSecurity";
import ChangePasswordScreen from "./screens/app/settings/sub-pages/ChangePassword";
import EnterNewPasswordScreen from "./screens/app/settings/sub-pages/EnterNewPassword";
import ForgotPasswordScreen from "./screens/app/settings/sub-pages/ForgotPassword";
import EnterNewForgottenPasswordScreen from "./screens/app/settings/sub-pages/EnterNewForgottenPassword";
import ChangeSuccessScreen from "./screens/app/settings/sub-pages/ChangeSuccess";
import TwoFAScreen from "./screens/app/settings/sub-pages/TwoFactorAuthentication";
import TransactionPinScreen from "./screens/app/settings/TransactionPin";
import NewTransactionPinScreen from "./screens/app/settings/sub-pages/NewTransactionPin";
import BuyAirtimeScreen from "./screens/app/bills/BuyAirtime";
import ConfirmAirtimePurchaseScreen from "./screens/app/bills/sub-pages/ConfirmAirtimePurchase";
import BuyDataScreen from "./screens/app/bills/BuyData";
import BuyElectricityScreen from "./screens/app/bills/BuyElectricity";
import InternetScreen from "./screens/app/bills/Internet";
import TvSubscriptionScreen from "./screens/app/bills/TvSubscription";

const Stack = createStackNavigator();
const TransitionScreenOptions = {
    headerShown: false,
    gestureEnabled: false,
    ...TransitionPresets.SlideFromRightIOS,
};
const confirmScreenTransition = {
    ...TransitionPresets.ModalTransition,
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
                        <Stack.Screen
                            name="ConfirmTransaction"
                            component={ConfirmTransactionScreen}
                        />
                        <Stack.Screen
                            name="TransactionSuccess"
                            component={TransactionSuccessScreen}
                            options={confirmScreenTransition}
                        />
                        {/* End of Send Naira Screens */}
                        {/* Send E-Naira Screens */}
                        <Stack.Screen
                            name="SendENaira"
                            component={SendENairaScreen}
                        />
                        {/* End of Send E-Naira Screens */}
                        {/* Settings Screen */}
                        <Stack.Screen
                            name="Settings"
                            component={SettingScreen}
                        />
                        <Stack.Screen
                            name="Profile"
                            component={ProfileScreen}
                        />
                        <Stack.Screen
                            name="EditAccountName"
                            component={EditNameScreen}
                        />
                        <Stack.Screen
                            name="EditAccountEmail"
                            component={EditEmailScreen}
                        />
                        <Stack.Screen
                            name="EditAccountAddress"
                            component={EditAddressScreen}
                        />
                        <Stack.Screen
                            name="EditAccountPhoneNumber"
                            component={EditNumberScreen}
                        />
                        <Stack.Screen
                            name="EditAccountNOK"
                            component={EditNOKScreen}
                        />
                        <Stack.Screen
                            name="Security"
                            component={AccountSecurityScreen}
                        />
                        <Stack.Screen
                            name="ChangePassword"
                            component={ChangePasswordScreen}
                        />
                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPasswordScreen}
                        />
                        <Stack.Screen
                            name="EnterNewPassword"
                            component={EnterNewPasswordScreen}
                        />
                        <Stack.Screen
                            name="EnterNewForgottenPassword"
                            component={EnterNewForgottenPasswordScreen}
                        />
                        <Stack.Screen
                            name="ChangeSuccess"
                            component={ChangeSuccessScreen}
                        />
                        <Stack.Screen
                            name="TwoFAScreen"
                            component={TwoFAScreen}
                        />

                        <Stack.Screen
                            name="TransactionPin"
                            component={TransactionPinScreen}
                        />
                        <Stack.Screen
                            name="NewTransactionPin"
                            component={NewTransactionPinScreen}
                        />
                        {/* End of Settings Screen */}

                        {/* Utilities Screens */}
                        <Stack.Screen
                            name="BuyAirtime"
                            component={BuyAirtimeScreen}
                        />
                        <Stack.Screen
                            name="BuyData"
                            component={BuyDataScreen}
                        />
                        <Stack.Screen
                            name="BuyElectricity"
                            component={BuyElectricityScreen}
                        />
                        <Stack.Screen
                            name="Internet"
                            component={InternetScreen}
                        />
                        <Stack.Screen
                            name="TvSubscription"
                            component={TvSubscriptionScreen}
                        />
                        <Stack.Screen
                            name="ConfirmAirtimePurchase"
                            component={ConfirmAirtimePurchaseScreen}
                        />
                        {/* End of Utilities Screens */}
                    </Stack.Group>
                    {/* End of App Screens */}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default AppNavigation;
