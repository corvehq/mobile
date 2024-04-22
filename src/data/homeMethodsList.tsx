import ColorQRCodeIcon from "../assets/icons/ColorQRCodeIcon";
import ColorRequestMoneyIcon from "../assets/icons/ColorRequestMoneyIcon";
import SendENairaIcon from "../assets/icons/SendENairaIcon";
import SendIcon from "../assets/icons/SendIcon";
import SendNairaIcon from "../assets/icons/SendNairaIcon";
import { HomeMethodsType } from "../utils/types";

export const otherFundMethods: HomeMethodsType[] = [
    {
        title: "QR Code",
        description: "Show QR code to anyone",
        icon: <ColorQRCodeIcon size={{ width: "26", height: "26" }} />,
        screen: "QRCode",
        accentColor: "#14338926",
    },
    {
        title: "Request Money",
        description: "Send a request to *** user",
        icon: <ColorRequestMoneyIcon size={{ width: "26", height: "26" }} />,
        screen: "RequestPayment",
        accentColor: "#208E3026",
    },
];

export const sendMethods: HomeMethodsType[] = [
    {
        title: "Naira",
        description: "Send Funds Through Bank Transfer",
        icon: <SendNairaIcon />,
        screen: "SendNaira",
        accentColor: "#699D1426",
    },
    {
        title: "eNaira",
        description: "Send a request to any **** user",
        icon: <SendENairaIcon />,
        screen: "SendENaira",
        accentColor: "#208E3026",
    },
];
