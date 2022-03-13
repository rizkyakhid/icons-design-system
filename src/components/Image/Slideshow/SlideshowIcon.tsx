import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ISlideshowIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SlideshowIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ISlideshowIconProps) {
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
        d="M10 9.42318V15.3432C10 15.7632 10.48 15.9932 10.81 15.7332L14.51 12.7732C14.76 12.5732 14.76 12.1932 14.51 11.9932L10.81 9.03318C10.48 8.77318 10 9.00318 10 9.42318ZM19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM18 19.3832H6C5.45 19.3832 5 18.9332 5 18.3832V6.38318C5 5.83318 5.45 5.38318 6 5.38318H18C18.55 5.38318 19 5.83318 19 6.38318V18.3832C19 18.9332 18.55 19.3832 18 19.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
