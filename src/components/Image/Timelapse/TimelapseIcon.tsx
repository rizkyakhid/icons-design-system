import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITimelapseIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TimelapseIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITimelapseIconProps) {
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
        d="M16.24 8.14318C15.07 6.97318 13.54 6.38318 12 6.38318V12.3832L7.76 16.6232C10.1 18.9632 13.9 18.9632 16.25 16.6232C18.59 14.2832 18.59 10.4832 16.24 8.14318ZM12 2.38318C6.48 2.38318 2 6.86318 2 12.3832C2 17.9032 6.48 22.3832 12 22.3832C17.52 22.3832 22 17.9032 22 12.3832C22 6.86318 17.52 2.38318 12 2.38318ZM12 20.3832C7.58 20.3832 4 16.8032 4 12.3832C4 7.96318 7.58 4.38318 12 4.38318C16.42 4.38318 20 7.96318 20 12.3832C20 16.8032 16.42 20.3832 12 20.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
