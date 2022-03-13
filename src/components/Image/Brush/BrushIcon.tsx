import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBrushIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BrushIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBrushIconProps) {
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
        d="M7 14.3832C5.34 14.3832 4 15.7232 4 17.3832C4 18.6932 2.84 19.3832 2 19.3832C2.92 20.6032 4.49 21.3832 6 21.3832C8.21 21.3832 10 19.5932 10 17.3832C10 15.7232 8.66 14.3832 7 14.3832ZM20.71 5.01318L19.37 3.67318C18.98 3.28318 18.35 3.28318 17.96 3.67318L9 12.6332L11.75 15.3832L20.71 6.42318C21.1 6.03318 21.1 5.40318 20.71 5.01318Z"
        fill={colorCode}
      />
    </svg>
  );
}
