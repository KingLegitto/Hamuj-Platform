import { FC } from "react";

interface NigeriaFlagProps {
  className?: string
}
 
const NigeriaFlag: FC<NigeriaFlagProps> = ({className}) => {
  return ( 
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_620_4)">
        <path
          d="M3.66667 4.58334C2.69421 4.58334 1.76158 4.96965 1.07394 5.65729C0.386309 6.34492 0 7.27755 0 8.25001L0 24.75C0 25.7225 0.386309 26.6551 1.07394 27.3427C1.76158 28.0304 2.69421 28.4167 3.66667 28.4167H11V4.58334H3.66667Z"
          fill="#009A49"
        />
        <path d="M11 4.58334H22V28.4167H11V4.58334Z" fill="#EEEEEE" />
        <path
          d="M29.3333 4.58334H22V28.4167H29.3333C30.3058 28.4167 31.2384 28.0304 31.9261 27.3427C32.6137 26.6551 33 25.7225 33 24.75V8.25001C33 7.27755 32.6137 6.34492 31.9261 5.65729C31.2384 4.96965 30.3058 4.58334 29.3333 4.58334Z"
          fill="#009A49"
        />
      </g>
      <defs>
        <clipPath id="clip0_620_4">
          <rect width="33" height="33" fill="white" />
        </clipPath>
      </defs>
    </svg>
   );
}
 
export default NigeriaFlag;
