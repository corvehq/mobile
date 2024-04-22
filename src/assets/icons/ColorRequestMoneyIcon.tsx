import Svg, { Path } from "react-native-svg";

const ColorRequestMoneyIcon = ({
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
                    d="M19.97 8.75H17.03C15.76 8.75 15 7.99 15 6.72V3.78C15 2.51 15.76 1.75 17.03 1.75H19.97C21.24 1.75 22 2.51 22 3.78V6.72C22 7.99 21.24 8.75 19.97 8.75ZM20.19 5.44C20.07 5.32 19.91 5.26 19.75 5.26C19.59 5.26 19.43 5.32 19.31 5.44L19.13 5.62V3.38C19.13 3.03 18.85 2.75 18.5 2.75C18.15 2.75 17.87 3.03 17.87 3.38V5.62L17.69 5.44C17.45 5.2 17.05 5.2 16.81 5.44C16.57 5.68 16.57 6.08 16.81 6.32L18.06 7.57C18.11 7.62 18.18 7.66 18.25 7.69C18.27 7.7 18.29 7.7 18.31 7.71C18.36 7.73 18.41 7.74 18.47 7.74C18.49 7.74 18.51 7.74 18.53 7.74C18.6 7.74 18.66 7.73 18.73 7.7C18.74 7.7 18.74 7.7 18.75 7.7C18.82 7.67 18.88 7.63 18.93 7.58C18.94 7.57 18.94 7.57 18.95 7.57L20.2 6.32C20.44 6.08 20.44 5.68 20.19 5.44Z"
                    fill={color ? color : "#208E30"}
                />
                <Path
                    d="M2 11.46V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.46C22 10.79 21.46 10.25 20.79 10.25H3.21C2.54 10.25 2 10.79 2 11.46ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
                    fill={color ? color : "#208E30"}
                />
                <Path
                    d="M13.5 4.6099V7.5399C13.5 8.2099 12.96 8.7499 12.29 8.7499H3.21C2.53 8.7499 2 8.1899 2 7.5199C2.01 6.3899 2.46 5.3599 3.21 4.6099C3.96 3.8599 5 3.3999 6.14 3.3999H12.29C12.96 3.3999 13.5 3.9399 13.5 4.6099Z"
                    fill={color ? color : "#208E30"}
                />
            </Svg>
        </>
    );
};

export default ColorRequestMoneyIcon;
