import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILooks6IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Looks6Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILooks6IconProps) {
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
        d="M11 15.3832H13V13.3832H11V15.3832ZM19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM14 9.38318H11V11.3832H13C14.1 11.3832 15 12.2832 15 13.3832V15.3832C15 16.4932 14.1 17.3832 13 17.3832H11C9.9 17.3832 9 16.4932 9 15.3832V9.38318C9 8.28318 9.9 7.38318 11 7.38318H14C14.55 7.38318 15 7.83318 15 8.38318C15 8.93318 14.55 9.38318 14 9.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
