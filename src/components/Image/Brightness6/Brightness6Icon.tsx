import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBrightness6IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Brightness6Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBrightness6IconProps) {
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
        d="M20 15.6932L22.6 13.0932C22.99 12.7032 22.99 12.0732 22.6 11.6832L20 9.07316V5.38316C20 4.83316 19.55 4.38316 19 4.38316H15.31L12.71 1.78316C12.32 1.39316 11.69 1.39316 11.3 1.78316L8.68998 4.38316H4.99998C4.44998 4.38316 3.99998 4.83316 3.99998 5.38316V9.07316L1.39998 11.6732C1.00998 12.0632 1.00998 12.6932 1.39998 13.0832L3.99998 15.6832V19.3832C3.99998 19.9332 4.44998 20.3832 4.99998 20.3832H8.68998L11.29 22.9832C11.68 23.3732 12.31 23.3732 12.7 22.9832L15.3 20.3832H19C19.55 20.3832 20 19.9332 20 19.3832V15.6932ZM12 17.2832V7.48316C12 6.87316 12.55 6.37316 13.15 6.49316C15.91 7.03316 18 9.46316 18 12.3832C18 15.3032 15.91 17.7332 13.15 18.2732C12.55 18.3932 12 17.8932 12 17.2832Z"
        fill={colorCode}
      />
    </svg>
  );
}
