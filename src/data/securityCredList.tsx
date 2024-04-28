import { SecurityCredType } from "../utils/types";

export const securityCredList: SecurityCredType[] = [
    {
        title: "FaceID/Fingerprint",
        toggle: true,
        screen: "Biometrics",
    },
    {
        title: "Change Password",
        screen: "ChangePassword",
        toggle: false,
    },
    {
        title: "Forgot Password",
        screen: "ForgotPassword",
        toggle: false,
    },
    {
        title: "2FA (Two-Factor Authentication)",
        screen: "TwoFAScreen",
        toggle: false,
    },
    {
        title: "Close Account",
        screen: "CloseAccountScreen",
        toggle: false,
    },
];
