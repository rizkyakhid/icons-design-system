import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICrop32IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Crop32Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICrop32IconProps) {
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
        d="M19 4.38318H5C3.9 4.38318 3 5.28318 3 6.38318V18.3832C3 19.4832 3.9 20.3832 5 20.3832H19C20.1 20.3832 21 19.4832 21 18.3832V6.38318C21 5.28318 20.1 4.38318 19 4.38318ZM18 18.3832H6C5.45 18.3832 5 17.9332 5 17.3832V7.38318C5 6.83318 5.45 6.38318 6 6.38318H18C18.55 6.38318 19 6.83318 19 7.38318V17.3832C19 17.9332 18.55 18.3832 18 18.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
