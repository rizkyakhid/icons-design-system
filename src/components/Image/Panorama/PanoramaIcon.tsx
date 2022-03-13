import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPanoramaIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PanoramaIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPanoramaIconProps) {
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
        d="M23 18.3832V6.38318C23 5.28318 22.1 4.38318 21 4.38318H3C1.9 4.38318 1 5.28318 1 6.38318V18.3832C1 19.4832 1.9 20.3832 3 20.3832H21C22.1 20.3832 23 19.4832 23 18.3832ZM8.9 13.3632L11 15.8932L14.1 11.9032C14.3 11.6432 14.7 11.6432 14.9 11.9132L18.41 16.5932C18.66 16.9232 18.42 17.3932 18.01 17.3932H6.02C5.6 17.3932 5.37 16.9132 5.63 16.5832L8.12 13.3832C8.31 13.1232 8.69 13.1132 8.9 13.3632Z"
        fill={colorCode}
      />
    </svg>
  );
}
