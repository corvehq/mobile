import Svg, { Circle, Path } from "react-native-svg";

const InternetIcon = ({
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
                <Circle cx="12" cy="12.001" r="9" fill="#D6FFDC" />
                <Path
                    d="M21.4097 8.63988C21.4097 8.63988 21.4097 8.63988 21.4097 8.58988C20.7051 6.6661 19.4266 5.00517 17.7472 3.83174C16.0678 2.65832 14.0685 2.02905 12.0197 2.02905C9.97096 2.02905 7.97164 2.65832 6.29222 3.83174C4.61279 5.00517 3.33431 6.6661 2.62971 8.58988C2.62971 8.58988 2.62971 8.58988 2.62971 8.63988C1.84283 10.8108 1.84283 13.189 2.62971 15.3599C2.62971 15.3599 2.62971 15.3599 2.62971 15.4099C3.33431 17.3337 4.61279 18.9946 6.29222 20.168C7.97164 21.3414 9.97096 21.9707 12.0197 21.9707C14.0685 21.9707 16.0678 21.3414 17.7472 20.168C19.4266 18.9946 20.7051 17.3337 21.4097 15.4099C21.4097 15.4099 21.4097 15.4099 21.4097 15.3599C22.1966 13.189 22.1966 10.8108 21.4097 8.63988ZM4.25971 13.9999C3.91294 12.6891 3.91294 11.3107 4.25971 9.99988H6.11971C5.95974 11.3284 5.95974 12.6713 6.11971 13.9999H4.25971ZM5.07971 15.9999H6.47971C6.71443 16.8917 7.04992 17.7539 7.47971 18.5699C6.49901 17.9018 5.6792 17.0239 5.07971 15.9999ZM6.47971 7.99988H5.07971C5.67058 6.97897 6.4799 6.10135 7.44971 5.42988C7.03026 6.24713 6.70485 7.1093 6.47971 7.99988ZM10.9997 19.6999C9.77147 18.7986 8.90886 17.4851 8.56971 15.9999H10.9997V19.6999ZM10.9997 13.9999H8.13971C7.9531 12.6731 7.9531 11.3267 8.13971 9.99988H10.9997V13.9999ZM10.9997 7.99988H8.56971C8.90886 6.51465 9.77147 5.2012 10.9997 4.29988V7.99988ZM18.9197 7.99988H17.5197C17.285 7.10804 16.9495 6.24582 16.5197 5.42988C17.5004 6.09795 18.3202 6.97582 18.9197 7.99988ZM12.9997 4.29988C14.2279 5.2012 15.0906 6.51465 15.4297 7.99988H12.9997V4.29988ZM12.9997 19.6999V15.9999H15.4297C15.0906 17.4851 14.2279 18.7986 12.9997 19.6999ZM15.8597 13.9999H12.9997V9.99988H15.8597C16.0463 11.3267 16.0463 12.6731 15.8597 13.9999ZM16.5497 18.5699C16.9795 17.7539 17.315 16.8917 17.5497 15.9999H18.9497C18.3502 17.0239 17.5304 17.9018 16.5497 18.5699ZM19.7397 13.9999H17.8797C17.961 13.3363 18.0011 12.6684 17.9997 11.9999C18.0008 11.3314 17.9607 10.6635 17.8797 9.99988H19.7397C20.0865 11.3107 20.0865 12.6891 19.7397 13.9999Z"
                    fill="#0B0A0A"
                />
            </Svg>
        </>
    );
};

export default InternetIcon;