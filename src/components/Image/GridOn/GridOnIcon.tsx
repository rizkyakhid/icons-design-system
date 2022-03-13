import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IGridOnIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function GridOnIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IGridOnIconProps) {
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
        d="M20 2.38318H4C2.9 2.38318 2 3.28318 2 4.38318V20.3832C2 21.4832 2.9 22.3832 4 22.3832H20C21.1 22.3832 22 21.4832 22 20.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318ZM8 20.3832H5C4.45 20.3832 4 19.9332 4 19.3832V16.3832H8V20.3832ZM8 14.3832H4V10.3832H8V14.3832ZM8 8.38318H4V5.38318C4 4.83318 4.45 4.38318 5 4.38318H8V8.38318ZM14 20.3832H10V16.3832H14V20.3832ZM14 14.3832H10V10.3832H14V14.3832ZM14 8.38318H10V4.38318H14V8.38318ZM19 20.3832H16V16.3832H20V19.3832C20 19.9332 19.55 20.3832 19 20.3832ZM20 14.3832H16V10.3832H20V14.3832ZM20 8.38318H16V4.38318H19C19.55 4.38318 20 4.83318 20 5.38318V8.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
