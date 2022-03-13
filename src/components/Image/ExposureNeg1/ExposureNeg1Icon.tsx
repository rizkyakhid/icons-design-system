import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IExposureNeg1IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ExposureNeg1Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IExposureNeg1IconProps) {
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
        d="M4 12.3832C4 12.9332 4.45 13.3832 5 13.3832H11C11.55 13.3832 12 12.9332 12 12.3832C12 11.8332 11.55 11.3832 11 11.3832H5C4.45 11.3832 4 11.8332 4 12.3832ZM19 18.3832H17V7.76318L14 8.78318V7.08318L18.7 5.38318H19V18.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
