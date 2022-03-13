import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICropSquareIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CropSquareIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICropSquareIconProps) {
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
        d="M18 4.38318H6C4.9 4.38318 4 5.28318 4 6.38318V18.3832C4 19.4832 4.9 20.3832 6 20.3832H18C19.1 20.3832 20 19.4832 20 18.3832V6.38318C20 5.28318 19.1 4.38318 18 4.38318ZM17 18.3832H7C6.45 18.3832 6 17.9332 6 17.3832V7.38318C6 6.83318 6.45 6.38318 7 6.38318H17C17.55 6.38318 18 6.83318 18 7.38318V17.3832C18 17.9332 17.55 18.3832 17 18.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
