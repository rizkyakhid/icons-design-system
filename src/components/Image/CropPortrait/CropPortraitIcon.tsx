import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICropPortraitIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CropPortraitIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICropPortraitIconProps) {
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
        d="M17 3.38318H7C5.9 3.38318 5 4.28318 5 5.38318V19.3832C5 20.4832 5.9 21.3832 7 21.3832H17C18.1 21.3832 19 20.4832 19 19.3832V5.38318C19 4.28318 18.1 3.38318 17 3.38318ZM16 19.3832H8C7.45 19.3832 7 18.9332 7 18.3832V6.38318C7 5.83318 7.45 5.38318 8 5.38318H16C16.55 5.38318 17 5.83318 17 6.38318V18.3832C17 18.9332 16.55 19.3832 16 19.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
