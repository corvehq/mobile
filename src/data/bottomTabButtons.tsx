import CogIcon from "../assets/icons/CogIcon";
import HistoryIcon from "../assets/icons/HistoryIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import NewsIcon from "../assets/icons/NewsIcon";
import ScanCodeIcon from "../assets/icons/ScanCodeIcon";
import { defaultAppGreen } from "../styles/const";
import { BottomTabButtonTypes } from "../utils/types";

export const bottomTabButtons: BottomTabButtonTypes[] = [
    {
        title: "Home",
        routeTitle: "Home",
        icon: (active: boolean) => (
            <HomeIcon color={active ? defaultAppGreen : "rgba(0,0,0,0.3)"} />
        ),
    },
    {
        title: "History",
        routeTitle: "History",
        icon: (active: boolean) => (
            <HistoryIcon color={active ? defaultAppGreen : "rgba(0,0,0,0.3)"} />
        ),
    },
    {
        title: "Scan Code",
        routeTitle: "ScanCode",
        icon: (active: boolean) => (
            <ScanCodeIcon
                color={active ? defaultAppGreen : "rgba(255,255,255,1)"}
                size={{ width: "30", height: "30" }}
            />
        ),
    },
    {
        title: "News",
        routeTitle: "NewsFeed",
        icon: (active: boolean) => (
            <NewsIcon color={active ? defaultAppGreen : "rgba(0,0,0,0.3)"} />
        ),
    },
    {
        title: "Settings",
        routeTitle: "Settings",
        icon: (active: boolean) => (
            <CogIcon color={active ? defaultAppGreen : "rgba(0,0,0,0.3)"} />
        ),
    },
];
