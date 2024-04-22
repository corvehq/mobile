import HistoryIcon from "../assets/icons/HistoryIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import NewsIcon from "../assets/icons/NewsIcon";
import UsersIcon from "../assets/icons/UsersIcon";

export const bottomTabButtons = [
    {
        title: "Home",
        routeTitle: "Dashboard",
        icon: (active: boolean) => (
            <HomeIcon color={active ? "#ffffff" : "rgba(0,0,0,0.3)"} />
        ),
    },
    {
        title: "History",
        routeTitle: "History",
        icon: (active: boolean) => (
            <HistoryIcon color={active ? "#ffffff" : "rgba(0,0,0,0.3)"} />
        ),
    },
    {
        title: "News",
        routeTitle: "News",
        icon: (active: boolean) => (
            <NewsIcon color={active ? "#ffffff" : "rgba(0,0,0,0.3)"} />
        ),
    },
    {
        title: "Profile",
        routeTitle: "Settings",
        icon: (active: boolean) => (
            <UsersIcon color={active ? "#ffffff" : "rgba(0,0,0,0.3)"} />
        ),
    },
];
