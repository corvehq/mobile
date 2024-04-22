import SendENairaIcon from "../assets/icons/SendENairaIcon";
import SendNairaIcon from "../assets/icons/SendNairaIcon";
import { AssetListTypes } from "../utils/types";

export const assetList: AssetListTypes[] = [
    {
        asset: "eNaira",
        symbol: <SendENairaIcon />,
        assetId: "01",
    },
    {
        asset: "Naira",
        symbol: <SendNairaIcon />,
        assetId: "02",
    },
];
