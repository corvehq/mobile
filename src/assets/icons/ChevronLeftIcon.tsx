import Svg, { Path } from "react-native-svg";

const ChevronLeftIcon = ({
    size,
    color,
}: {
    color?: string;
    size?: { width: string; height: string };
}) => {
    return (
        <>
            <Svg
                width={size ? size.width : "30"}
                height={size ? size.height : "30"}
                viewBox="0 0 27 26"
                fill="none"
            >
                <Path
                    d="M16.1615 18.0575L10.9201 12.8161L16.1615 7.57471"
                    stroke={color ? color : "#000000"}
                    strokeWidth="1.57242"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </>
    );
};

export default ChevronLeftIcon;
