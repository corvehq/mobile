import Svg, {
    Circle,
    Defs,
    LinearGradient,
    Path,
    Polygon,
    RadialGradient,
    Stop,
} from "react-native-svg";

const GloIcon = () => {
    return (
        <>
            <Svg viewBox="0 0 1000 1000">
                <Defs>
                    <LinearGradient
                        id="a"
                        x1="484.48"
                        y1="319.34"
                        x2="536.14"
                        y2="785.87"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0" stopColor="#123214" />
                        <Stop offset="0.46" stopColor="#3e7c37" />
                        <Stop offset="0.91" stopColor="#5fbb46" />
                    </LinearGradient>
                    <LinearGradient
                        id="b"
                        x1="4812.32"
                        y1="-2121.07"
                        x2="4812.32"
                        y2="-2122.13"
                        gradientTransform="matrix(115.64, 0, 0, -355.9, -555713.76, -754599.8)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0" stopColor="#fff" stop-opacity="0" />
                        <Stop
                            offset="0.64"
                            stopColor="#fff"
                            stop-opacity="0.43"
                        />
                        <Stop offset="1" stopColor="#fff" stop-opacity="0.42" />
                    </LinearGradient>
                    <RadialGradient
                        id="c"
                        cx="1772.25"
                        cy="-341.52"
                        fy="-409.14889841083107"
                        r="151.52"
                        gradientTransform="matrix(1.17, 0.59, -0.28, 0.47, -1527.13, -664.3)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0.13" stopColor="#fff" />
                        <Stop
                            offset="0.29"
                            stopColor="#fff"
                            stop-opacity="0.69"
                        />
                        <Stop
                            offset="0.45"
                            stopColor="#fff"
                            stop-opacity="0.4"
                        />
                        <Stop
                            offset="0.59"
                            stopColor="#fff"
                            stop-opacity="0.18"
                        />
                        <Stop
                            offset="0.69"
                            stopColor="#fff"
                            stop-opacity="0.05"
                        />
                        <Stop offset="0.74" stopColor="#fff" stop-opacity="0" />
                    </RadialGradient>
                    <RadialGradient
                        id="d"
                        cx="570.86"
                        cy="398.43"
                        fx="613.1001782573674"
                        fy="841.347906680515"
                        r="444.93"
                        gradientTransform="translate(410.75 -300.75) rotate(39.84) scale(1 1.09)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0.86" stop-opacity="0" />
                        <Stop offset="0.98" stop-opacity="0.47" />
                        <Stop offset="1" />
                    </RadialGradient>
                </Defs>
                <Circle cx="502.49" cy="490.94" r="401.79" fill="#50b651" />
                <Path
                    d="M903.05,489.81c0,222.6-180.45,403.05-403,403.05S97,712.41,97,489.81c0-98.47,2.76-113.11,41.52-169.17,0,0-2,63.32,44.43,101,28.87,23.41,59,6.51,114.15-18.89,59.66-27.5,108.16-45.24,146-40.56,57,7.06,232.69,112.57,324.38,91.56C840.73,437,833,264.3,833,264.3,913,342.42,903.05,395.22,903.05,489.81Z"
                    fillRule="evenodd"
                    opacity="0.6629999876022339"
                    fill="url(#a)"
                />
                <Path
                    d="M673,785.86q218.65-205.67,72.69-471.24.74.54,18.06-62.32,77.68,94.07,82.61,232.22Q846.32,663.46,673,785.86Z"
                    fillRule="evenodd"
                    opacity="0.5860000252723694"
                    fill="url(#b)"
                />
                <Path
                    d="M603.86,253.13C533.5,214.19,452.78,135.86,463.51,119.41s150-13.62,220.37,25.32,130.26,155.75,119.54,172.2S674.22,292.07,603.86,253.13Z"
                    fillRule="evenodd"
                    opacity="0.7440000176429749"
                    fill="url(#c)"
                />
                <Path
                    d="M665.15,589.89c-58.37,0-105.69-48.67-105.69-108.7S606.78,372.5,665.15,372.5s105.7,48.66,105.7,108.69S723.53,589.89,665.15,589.89Zm.75-34.48c36.43,0,66-33.23,66-74.22S702.33,407,665.9,407s-66,33.23-66,74.21S629.47,555.41,665.9,555.41Z"
                    fill="#fff"
                    fillRule="evenodd"
                />
                <Polygon
                    points="447.08 284.98 523.24 284.98 523.24 588.68 481.43 588.68 481.43 318.29 447.08 318.29 447.08 284.98"
                    fill="#fff"
                    fillRule="evenodd"
                />
                <Path
                    d="M390.32,375.59h39.53V629.21c0,23.11-24.31,47.18-48,57.54q-16.8,7.34-62,8.72V670.24q44.21-4.93,59.68-19.67a59.29,59.29,0,0,0,10.8-28.06V548q-15.85,33.63-39.92,44.59c-16.68,9-50.63,7.52-64.49,0s-34.19-27.32-43.51-56.81c-2.58-8.14-9-30.29-8.33-53.76.6-22.35,8-46,14.15-55.72,10.56-16.6,27.21-37.39,52.43-46.08q18.48-6.37,68.5-4.58v25.09q-37.17-2.51-46.38,2.51c-9.21,5-30,11.17-36.86,56.48s.2,82.39,21.95,94c7.45,4,20.63,8.73,32.81,4.56,23.4-8,45.42-36.53,47.1-55.86Q390.32,473,390.32,375.59Z"
                    fill="#fff"
                    fillRule="evenodd"
                />
                <Path
                    d="M890.42,570.48C853.09,750.23,693.81,885.29,503,885.29c-218.53,0-395.69-177.16-395.69-395.69,0-135.76,68.37-255.55,172.55-326.8C195.21,233,141.31,339.05,141.31,457.64c0,211.53,171.48,383,383,383C696.57,840.64,842.25,726.93,890.42,570.48Z"
                    fill="url(#d)"
                    fillRule="evenodd"
                />
                <Path
                    d="M503,21C244.2,21,34.39,230.8,34.39,489.6S244.2,958.21,503,958.21,971.61,748.4,971.61,489.6,761.8,21,503,21Zm0,864.3c-218.53,0-395.69-177.16-395.69-395.69,0-135.76,68.37-255.55,172.55-326.8A393.82,393.82,0,0,1,503,93.91c218.53,0,395.69,177.15,395.69,395.69a397.6,397.6,0,0,1-8.27,80.88C853.09,750.23,693.81,885.29,503,885.29Z"
                    fill="#fff"
                    fillRule="evenodd"
                />
            </Svg>
        </>
    );
};

export default GloIcon;
