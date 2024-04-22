import Svg, { Path } from "react-native-svg";

const SendNairaIcon = ({
    color,
    size,
}: {
    color?: string;
    size?: { width: string; height: string };
}) => {
    return (
        <>
            <Svg
                width={size ? size.width : "28"}
                height={size ? size.height : "28"}
                viewBox="0 0 25 25"
                fill="none"
            >
                <Path
                    d="M8.23833 18.085V14.133H7.31033V12.949H8.23833V11.797H7.31033V10.613H8.23833V6.66096H10.7503L11.9983 10.613H13.4543V6.66096H15.2303V10.613H16.1423V11.797H15.2303V12.949H16.1423V14.133H15.2303V18.085H12.7023L11.4223 14.133H10.0143V18.085H8.23833ZM10.0143 12.949H11.0703L10.7183 11.797H9.98233L10.0143 12.949ZM13.5023 15.589H13.5823L13.5183 14.133H13.0863L13.5023 15.589ZM9.95033 10.613H10.3983L9.93433 9.07696H9.87033L9.95033 10.613ZM12.7503 12.949H13.4863L13.4543 11.797H12.3823L12.7503 12.949Z"
                    fill={color ? color : "#699D14"}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.25 2.10826C6.55052 2.10826 1.92442 6.73436 1.92442 12.4338C1.92442 18.1333 6.55052 22.7594 12.25 22.7594C17.9495 22.7594 22.5756 18.1333 22.5756 12.4338C22.5756 11.9715 22.9504 11.5966 23.4128 11.5966C23.8752 11.5966 24.25 11.9715 24.25 12.4338C24.25 19.0581 18.8742 24.4338 12.25 24.4338C5.62576 24.4338 0.25 19.0581 0.25 12.4338C0.25 5.8096 5.62576 0.433838 12.25 0.433838C12.7124 0.433838 13.0872 0.808669 13.0872 1.27105C13.0872 1.73343 12.7124 2.10826 12.25 2.10826Z"
                    fill={color ? color : "#699D14"}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1104 1.27105C18.1104 0.808669 18.4852 0.433838 18.9476 0.433838H23.4127C23.8751 0.433838 24.2499 0.808669 24.2499 1.27105V5.73616C24.2499 6.19854 23.8751 6.57337 23.4127 6.57337C22.9503 6.57337 22.5755 6.19854 22.5755 5.73616V2.10826H18.9476C18.4852 2.10826 18.1104 1.73343 18.1104 1.27105Z"
                    fill={color ? color : "#699D14"}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.0047 0.679051C24.3317 1.006 24.3317 1.53609 24.0047 1.86304L18.4233 7.44444C18.0964 7.77139 17.5663 7.77139 17.2394 7.44444C16.9124 7.11749 16.9124 6.5874 17.2394 6.26045L22.8208 0.679051C23.1477 0.3521 23.6778 0.3521 24.0047 0.679051Z"
                    fill={color ? color : "#699D14"}
                />
            </Svg>
        </>
    );
};

export default SendNairaIcon;
