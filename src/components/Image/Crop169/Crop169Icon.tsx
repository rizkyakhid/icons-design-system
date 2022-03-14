import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICrop169IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Crop169Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICrop169IconProps) {
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
        d="M19 6.38318H5C3.9 6.38318 3 7.28318 3 8.38318V16.3832C3 17.4832 3.9 18.3832 5 18.3832H19C20.1 18.3832 21 17.4832 21 16.3832V8.38318C21 7.28318 20.1 6.38318 19 6.38318ZM18 16.3832H6C5.45 16.3832 5 15.9332 5 15.3832V9.38318C5 8.83318 5.45 8.38318 6 8.38318H18C18.55 8.38318 19 8.83318 19 9.38318V15.3832C19 15.9332 18.55 16.3832 18 16.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
