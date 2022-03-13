import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBrightness4IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Brightness4Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBrightness4IconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      style={{
        transform: `rotate(${rotate}deg)`,
        WebkitTransform: `rotate(${rotate}deg)`,
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6 11.6732L20 9.07316V5.38316C20 4.83316 19.55 4.38316 19 4.38316H15.31L12.71 1.78316C12.32 1.39316 11.69 1.39316 11.3 1.78316L8.68998 4.38316H4.99998C4.44998 4.38316 3.99998 4.83316 3.99998 5.38316V9.07316L1.39998 11.6732C1.00998 12.0632 1.00998 12.6932 1.39998 13.0832L3.99998 15.6832V19.3832C3.99998 19.9332 4.44998 20.3832 4.99998 20.3832H8.68998L11.29 22.9832C11.68 23.3732 12.31 23.3732 12.7 22.9832L15.3 20.3832H19C19.55 20.3832 20 19.9332 20 19.3832V15.6932L22.6 13.0932C22.99 12.7032 22.99 12.0632 22.6 11.6732ZM17.92 13.3632C17.58 15.4832 16.07 17.3032 14.04 18.0232C12.83 18.4532 11.63 18.4732 10.54 18.2032C10.13 18.1032 10.06 17.5532 10.41 17.3032C11.98 16.2232 13 14.4232 13 12.3832C13 10.3432 11.98 8.54316 10.42 7.46316C10.07 7.22316 10.13 6.67316 10.55 6.56316C11.64 6.29316 12.84 6.31316 14.05 6.74316C16.07 7.46316 17.59 9.28316 17.93 11.4032C17.98 11.7332 18 12.0632 18 12.3832C17.99 12.7032 17.97 13.0332 17.92 13.3632Z"
        fill={colorCode}
      />
    </svg>
  );
}
