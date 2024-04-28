import Svg, { Path } from "react-native-svg";

const OptionWalletIcon = ({
    color,
    size,
}: {
    color?: string;
    size?: { width: string; height: string };
}) => {
    return (
        <>
            <Svg
                width={size ? size.width : "24"}
                height={size ? size.height : "24"}
                viewBox="0 0 24 24"
                fill="none"
            >
                <Path
                    d="M12 5H4.61111C3.44518 5 2.5 6.04467 2.5 7.33333V16.6667C2.5 17.9553 3.44518 19 4.61111 19H8M17 5H19.3889C20.5548 5 21.5 6.04467 21.5 7.33333V16.6667C21.5 17.9553 20.5548 19 19.3889 19H12M21.5 9H14C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15H21.5M14 12V12.01"
                    stroke={color ? color : "#000000"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </>
    );
};

export default OptionWalletIcon;
