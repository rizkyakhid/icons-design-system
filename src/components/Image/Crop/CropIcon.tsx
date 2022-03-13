import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICropIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CropIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICropIconProps) {
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
        d="M17 15.3832H19V7.38318C19 6.28318 18.1 5.38318 17 5.38318H9V7.38318H16C16.55 7.38318 17 7.83318 17 8.38318V15.3832ZM8 17.3832C7.45 17.3832 7 16.9332 7 16.3832V2.38318C7 1.83318 6.55 1.38318 6 1.38318C5.45 1.38318 5 1.83318 5 2.38318V5.38318H2C1.45 5.38318 1 5.83318 1 6.38318C1 6.93318 1.45 7.38318 2 7.38318H5V17.3832C5 18.4832 5.9 19.3832 7 19.3832H17V22.3832C17 22.9332 17.45 23.3832 18 23.3832C18.55 23.3832 19 22.9332 19 22.3832V19.3832H22C22.55 19.3832 23 18.9332 23 18.3832C23 17.8332 22.55 17.3832 22 17.3832H8Z"
        fill={colorCode}
      />
    </svg>
  );
}
