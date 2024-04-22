import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const BuyDataIcon = ({
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
                <Rect
                    x="8.16968"
                    y="3.61011"
                    width="16.2942"
                    height="14.5788"
                    transform="rotate(16.8701 8.16968 3.61011)"
                    fill="#59675A"
                />
                <G clipPath="url(#clip0_17_823)">
                    <Path
                        d="M9.90445 21.5346L9.90443 21.5345L6.01553 18.1744C5.66149 17.8684 5.66149 17.3552 6.01553 17.0493H6.01553M9.90445 21.5346L6.01553 17.0493L6.17894 17.2384L6.01553 17.0493M9.90445 21.5346C10.237 21.8218 10.763 21.8218 11.0955 21.5346L11.0956 21.5345M9.90445 21.5346L11.0956 21.5345M6.01553 17.0493C6.34805 16.762 6.87412 16.762 7.20664 17.0493L9.63891 19.1509M6.01553 17.0493L9.63891 19.1509M11.0956 21.5345L14.9845 18.1744C15.3385 17.8684 15.3385 17.3552 14.9845 17.0493C14.6519 16.762 14.1259 16.762 13.7934 17.0493L11.3611 19.1509V-0.5V-0.75L11.1111 -0.75L9.88891 -0.75H9.63891V-0.5V19.1509M11.0956 21.5345L9.63891 19.1509"
                        fill="black"
                        stroke="black"
                        strokeWidth="0.5"
                    />
                </G>
                <G clipPath="url(#clip1_17_823)">
                    <Path
                        d="M14.0995 3.63503L14.0995 3.63503L11.2642 8.0917L11.0748 8.25482C11.0748 8.25482 11.0748 8.25482 11.0748 8.25483C11.3601 8.58624 11.8405 8.58624 12.1258 8.25482L13.8997 6.19462V26.6365V26.8865H14.1497H15.1003H15.3503V26.6365V6.19462L17.1242 8.25483L17.1242 8.25483C17.4095 8.58623 17.8899 8.58624 18.1752 8.25483C18.4416 7.94549 18.4416 7.45728 18.1752 7.14794L15.1505 3.63503C14.8652 3.30362 14.3848 3.30362 14.0995 3.63503Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="0.5"
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_17_823">
                        <Rect
                            width="6"
                            height="23"
                            fill={color ? color : "#ffffff"}
                            transform="translate(5 0.5)"
                        />
                    </ClipPath>
                    <ClipPath id="clip1_17_823">
                        <Rect
                            width="5"
                            height="23"
                            fill={color ? color : "#ffffff"}
                            transform="translate(14 0.5)"
                        />
                    </ClipPath>
                </Defs>
            </Svg>
        </>
    );
};

export default BuyDataIcon;
