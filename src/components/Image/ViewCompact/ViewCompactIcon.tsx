import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IViewCompactIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewCompactIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IViewCompactIconProps) {
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
        d="M5 19.3832H9V12.3832H3V17.3832C3 18.4832 3.9 19.3832 5 19.3832ZM10 19.3832H20C21.1 19.3832 22 18.4832 22 17.3832V12.3832H10V19.3832ZM3 7.38318V11.3832H22V7.38318C22 6.28318 21.1 5.38318 20 5.38318H5C3.9 5.38318 3 6.28318 3 7.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
