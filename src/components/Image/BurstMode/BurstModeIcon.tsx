import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBurstModeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BurstModeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBurstModeIconProps) {
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
        d="M2 5.38318C2.55 5.38318 3 5.83318 3 6.38318V18.3832C3 18.9332 2.55 19.3832 2 19.3832C1.45 19.3832 1 18.9332 1 18.3832V6.38318C1 5.83318 1.45 5.38318 2 5.38318ZM6 5.38318C6.55 5.38318 7 5.83318 7 6.38318V18.3832C7 18.9332 6.55 19.3832 6 19.3832C5.45 19.3832 5 18.9332 5 18.3832V6.38318C5 5.83318 5.45 5.38318 6 5.38318ZM22 5.38318H10C9.45 5.38318 9 5.83318 9 6.38318V18.3832C9 18.9332 9.45 19.3832 10 19.3832H22C22.55 19.3832 23 18.9332 23 18.3832V6.38318C23 5.83318 22.55 5.38318 22 5.38318ZM11.64 16.5732L13.11 14.7132C13.31 14.4632 13.68 14.4632 13.89 14.7032L15.29 16.3832L17.39 13.6732C17.59 13.4132 17.98 13.4132 18.18 13.6732L20.39 16.5732C20.64 16.9032 20.41 17.3732 19.99 17.3732H12.03C11.62 17.3832 11.38 16.9032 11.64 16.5732Z"
        fill={colorCode}
      />
    </svg>
  );
}
