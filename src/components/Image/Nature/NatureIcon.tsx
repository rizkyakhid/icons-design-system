import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface INatureIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NatureIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: INatureIconProps) {
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
        d="M13 16.5032C16.37 16.1032 19.01 13.3132 19.16 9.86318C19.33 5.99318 16.14 2.61318 12.27 2.55318C8.35 2.50318 5.17 5.65318 5.17 9.55318C5.17 13.0232 7.69 15.8932 11 16.4432V20.3832H6C5.45 20.3832 5 20.8332 5 21.3832C5 21.9332 5.45 22.3832 6 22.3832H18C18.55 22.3832 19 21.9332 19 21.3832C19 20.8332 18.55 20.3832 18 20.3832H13V16.5032Z"
        fill={colorCode}
      />
    </svg>
  );
}
