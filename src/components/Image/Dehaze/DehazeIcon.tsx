import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IDehazeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DehazeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IDehazeIconProps) {
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
        d="M2 17.3832C2 17.9332 2.45 18.3832 3 18.3832H21C21.55 18.3832 22 17.9332 22 17.3832C22 16.8332 21.55 16.3832 21 16.3832H3C2.45 16.3832 2 16.8332 2 17.3832ZM2 12.3832C2 12.9332 2.45 13.3832 3 13.3832H21C21.55 13.3832 22 12.9332 22 12.3832C22 11.8332 21.55 11.3832 21 11.3832H3C2.45 11.3832 2 11.8332 2 12.3832ZM2 7.38318C2 7.93318 2.45 8.38318 3 8.38318H21C21.55 8.38318 22 7.93318 22 7.38318C22 6.83318 21.55 6.38318 21 6.38318H3C2.45 6.38318 2 6.83318 2 7.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
