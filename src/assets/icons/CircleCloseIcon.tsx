import Svg, { Path } from "react-native-svg";

const CircleCloseIcon = ({
    size,
}: {
    size?: { width: string; height: string };
}) => {
    return (
        <>
            <Svg
                width={size ? size.width : "26"}
                height={size ? size.height : "26"}
                viewBox="0 0 26 26"
                fill="none"
            >
                <Path
                    d="M3.97326 9.65003C4.65622 6.7385 6.92956 4.46516 9.84109 3.78221C11.9438 3.28899 14.132 3.28899 16.2347 3.78221C19.1462 4.46516 21.4196 6.7385 22.1025 9.65003C22.5957 11.7527 22.5957 13.941 22.1025 16.0436C21.4196 18.9552 19.1462 21.2285 16.2347 21.9115C14.132 22.4047 11.9438 22.4047 9.84109 21.9115C6.92956 21.2285 4.65622 18.9552 3.97326 16.0437C3.48004 13.941 3.48004 11.7527 3.97326 9.65003Z"
                    stroke="#000000"
                    strokeWidth="1.57242"
                />
                <Path
                    d="M14.8909 10.9937L11.1847 14.6999M14.8909 14.6999L11.1847 10.9937"
                    stroke="#000000"
                    strokeWidth="1.57242"
                    strokeLinecap="round"
                />
            </Svg>
        </>
    );
};

export default CircleCloseIcon;
