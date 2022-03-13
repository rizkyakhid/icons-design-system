import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBedtimeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BedtimeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBedtimeIconProps) {
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
        d="M11.97 3.11317C12.13 2.77317 11.85 2.39317 11.47 2.41317C5.47 2.71317 0.999996 8.24317 2.19 14.3732C2.97 18.4032 6.28 21.5932 10.33 22.2432C14.4 22.9032 18.1 21.1032 20.2 18.0932C20.41 17.7832 20.24 17.3432 19.87 17.3032C13.13 16.5432 9 9.34317 11.97 3.11317Z"
        fill={colorCode}
      />
    </svg>
  );
}
