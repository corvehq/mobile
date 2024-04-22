import Svg, { Circle, Path, Rect } from "react-native-svg";

const SendENairaIcon = ({
    color,
    size,
}: {
    color?: string;
    size?: { width: string; height: string };
}) => {
    return (
        <>
            <Svg
                width={size ? size.width : "30"}
                height={size ? size.height : "30"}
                viewBox="0 0 31 25"
                fill="none"
            >
                <Circle
                    cx="15.5"
                    cy="11.8095"
                    r="10.6614"
                    fill={color ? color : "#DEEEE0"}
                    stroke={color ? color : "#208E30"}
                    stroke-width="2.2963"
                />
                <Path
                    d="M20.5994 17.6904V5.131H17.8005V12.7659L13.0885 5.131H9.68736V17.6904H12.4685V9.43557L17.6411 17.6904H20.5994Z"
                    fill={color ? color : "#208E30"}
                />
                <Rect
                    width="31"
                    height="2.21429"
                    transform="translate(0 9.59521)"
                    fill={color ? color : "#208E30"}
                />
                <Rect
                    width="8.11905"
                    height="1.47619"
                    transform="translate(0 11.8096)"
                    fill={color ? color : "#DEEEE0"}
                />
                <Rect
                    width="8.11905"
                    height="1.47619"
                    transform="translate(22.8813 11.8096)"
                    fill={color ? color : "#DEEEE0"}
                />
                <Rect
                    width="31"
                    height="2.21429"
                    transform="translate(0 13.2856)"
                    fill={color ? color : "#208E30"}
                />
                <Rect
                    x="18.6924"
                    y="19.24"
                    width="8.11905"
                    height="5.63282"
                    transform="rotate(-24.447 18.6924 19.24)"
                    fill={color ? color : "#DEEEE0"}
                />
                <Rect
                    x="22.1426"
                    y="15.5"
                    width="8.11905"
                    height="5.63282"
                    fill={color ? color : "#DEEEE0"}
                />
            </Svg>
        </>
    );
};

export default SendENairaIcon;
