import Svg, { Circle, Path, Rect } from "react-native-svg";

const ENairaIcon = ({
    color,
    size,
}: {
    color?: string;
    size?: { width: string; height: string };
}) => {
    return (
        <>
            <Svg
                width={size ? size.width : "25"}
                height={size ? size.height : "25"}
                viewBox="0 0 16 12"
                fill="none"
            >
                <Circle
                    cx="7.63252"
                    cy="5.81563"
                    r="5.39463"
                    fill="white"
                    stroke="#686873"
                    strokeWidth="0.841999"
                />
                <Path
                    d="M9.45636 7.8175V3.21225H8.43008V6.01178L6.7023 3.21225H5.45518V7.8175H6.47496V4.79064L8.37162 7.8175H9.45636Z"
                    fill="#686873"
                />
                <Rect
                    width="15.266"
                    height="1.09043"
                    transform="translate(0 4.7251)"
                    fill="#686873"
                />
                <Rect
                    width="3.99824"
                    height="0.726954"
                    transform="translate(0 5.81555)"
                    fill="white"
                />
                <Rect
                    width="3.99824"
                    height="0.726954"
                    transform="translate(11.2681 5.81555)"
                    fill="white"
                />
                <Rect
                    width="15.266"
                    height="1.09043"
                    transform="translate(0 6.5426)"
                    fill="#686873"
                />
                <Rect
                    x="9.20508"
                    y="9.47485"
                    width="3.99824"
                    height="2.7739"
                    transform="rotate(-24.447 9.20508 9.47485)"
                    fill="white"
                />
                <Rect
                    x="10.9043"
                    y="7.63293"
                    width="3.99824"
                    height="2.7739"
                    fill="white"
                />
            </Svg>
        </>
    );
};

export default ENairaIcon;
