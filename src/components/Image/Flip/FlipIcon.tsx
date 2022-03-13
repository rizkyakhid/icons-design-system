import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFlipIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlipIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFlipIconProps) {
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
        d="M15 21.3832H17V19.3832H15V21.3832ZM19 9.38318H21V7.38318H19V9.38318ZM3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H8C8.55 21.3832 9 20.9332 9 20.3832C9 19.8332 8.55 19.3832 8 19.3832H6C5.45 19.3832 5 18.9332 5 18.3832V6.38318C5 5.83318 5.45 5.38318 6 5.38318H8C8.55 5.38318 9 4.93318 9 4.38318C9 3.83318 8.55 3.38318 8 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318ZM19 3.38318V5.38318H21C21 4.28318 20.1 3.38318 19 3.38318ZM12 23.3832C12.55 23.3832 13 22.9332 13 22.3832V2.38318C13 1.83318 12.55 1.38318 12 1.38318C11.45 1.38318 11 1.83318 11 2.38318V22.3832C11 22.9332 11.45 23.3832 12 23.3832ZM19 17.3832H21V15.3832H19V17.3832ZM15 5.38318H17V3.38318H15V5.38318ZM19 13.3832H21V11.3832H19V13.3832ZM19 21.3832C20.1 21.3832 21 20.4832 21 19.3832H19V21.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
