import Svg, { Path } from "react-native-svg";

const ChevronRightIcon = ({
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
                    d="M10.8221 7.56121L16.0635 12.8026L10.8221 18.044"
                    stroke={color ? color : "#000000"}
                    strokeWidth="1.57242"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </>
    );
};

export default ChevronRightIcon;
