import Svg, { Path } from "react-native-svg";

const EyeIcon = ({
    color,
    size,
}: {
    color?: string;
    size?: { width: string; height: string };
}) => {
    return (
        <>
            <Svg
                width={size ? size.width : "16"}
                height={size ? size.height : "15"}
                viewBox="0 0 21 20"
                fill="none"
            >
                <Path
                    d="M2.03062 6.50152C5.83612 0.000304916 15.1918 0.000305487 18.9973 6.50152C20.2656 8.66822 20.2656 11.3555 18.9973 13.5222C15.1918 20.0234 5.83612 20.0234 2.03062 13.5222C0.762336 11.3555 0.762337 8.66822 2.03062 6.50152Z"
                    stroke={color ? color : "#000000"}
                    strokeWidth="1.57242"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.2424 10.0755C14.2424 12.1673 12.5725 13.8625 10.5134 13.8625C8.45428 13.8625 6.78554 12.1673 6.78554 10.0755C6.78554 7.98253 8.45428 6.28731 10.5134 6.28731C12.5725 6.28731 14.2424 7.98253 14.2424 10.0755Z"
                    stroke={color ? color : "#000000"}
                    strokeWidth="1.57242"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </>
    );
};

export default EyeIcon;
