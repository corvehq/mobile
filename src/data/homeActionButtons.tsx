import BuyAirtimeIcon from "../assets/icons/BuyAirtimeIcon";
import BuyDataIcon from "../assets/icons/BuyDataIcon";
import BuyIcon from "../assets/icons/BuyIcon";
import ElectricityIcon from "../assets/icons/ElectricityIcon";
import InternetIcon from "../assets/icons/InternetIcon";
import MoreIcon from "../assets/icons/MoreIcon";
import ReceiveIcon from "../assets/icons/ReceiveIcon";
import SendIcon from "../assets/icons/SendIcon";
import TvSubIcon from "../assets/icons/TvSubIcon";
import { defaultAppGreen } from "../styles/const";
import { HomeActionType } from "../utils/types";

export const homeActionButtons: HomeActionType[] = [
    {
        title: "Send",
        screen: "SendScreen",
        icon: <SendIcon color={defaultAppGreen} />,
    },
    {
        title: "Receive",
        screen: "ReceiveScreen",
        icon: <ReceiveIcon color={defaultAppGreen} />,
    },
    {
        title: "Buy",
        screen: "BuyScreen",
        icon: <BuyIcon color={defaultAppGreen} />,
    },
];

export const utilityActions: HomeActionType[] = [
    {
        title: "Buy Data",
        screen: "BuyData",
        icon: <BuyDataIcon size={{ width: "25", height: "25" }} />,
    },
    {
        title: "Buy Airtime",
        screen: "BuyAirtime",
        icon: <BuyAirtimeIcon size={{ width: "25", height: "25" }} />,
    },
    // {
    //     title: "Internet",
    //     screen: "Internet",
    //     icon: <InternetIcon size={{ width: "25", height: "25" }} />,
    // },
    {
        title: "Electricity",
        screen: "BuyElectricity",
        icon: <ElectricityIcon size={{ width: "25", height: "25" }} />,
    },
    {
        title: "More",
        screen: "More",
        icon: <MoreIcon size={{ width: "25", height: "25" }} />,
    },
    // {
    //     title: "Tv Subscription",
    //     screen: "TvSubscription",
    //     icon: <TvSubIcon size={{ width: "25", height: "25" }} />,
    // },
];

export const moreUtilityActions: HomeActionType[] = [
    {
        title: "Internet",
        screen: "Internet",
        icon: <InternetIcon size={{ width: "25", height: "25" }} />,
    },
    {
        title: "Tv Subscription",
        screen: "TvSubscription",
        icon: <TvSubIcon size={{ width: "25", height: "25" }} />,
    },
];
