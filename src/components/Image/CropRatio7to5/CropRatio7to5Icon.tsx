import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICropRatio7to5IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CropRatio7to5Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICropRatio7to5IconProps) {
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
        d="M19 7.38318H5C3.9 7.38318 3 8.28318 3 9.38318V15.3832C3 16.4832 3.9 17.3832 5 17.3832H19C20.1 17.3832 21 16.4832 21 15.3832V9.38318C21 8.28318 20.1 7.38318 19 7.38318ZM18 15.3832H6C5.45 15.3832 5 14.9332 5 14.3832V10.3832C5 9.83318 5.45 9.38318 6 9.38318H18C18.55 9.38318 19 9.83318 19 10.3832V14.3832C19 14.9332 18.55 15.3832 18 15.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
