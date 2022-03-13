import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IVignetteIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VignetteIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IVignetteIconProps) {
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
        d="M21 3.38318H3C1.9 3.38318 1 4.28318 1 5.38318V19.3832C1 20.4832 1.9 21.3832 3 21.3832H21C22.1 21.3832 23 20.4832 23 19.3832V5.38318C23 4.28318 22.1 3.38318 21 3.38318ZM12 18.3832C7.58 18.3832 4 15.6932 4 12.3832C4 9.07318 7.58 6.38318 12 6.38318C16.42 6.38318 20 9.07318 20 12.3832C20 15.6932 16.42 18.3832 12 18.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
