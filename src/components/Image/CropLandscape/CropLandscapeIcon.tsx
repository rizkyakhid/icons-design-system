import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICropLandscapeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CropLandscapeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICropLandscapeIconProps) {
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
        d="M19 5.38318H5C3.9 5.38318 3 6.28318 3 7.38318V17.3832C3 18.4832 3.9 19.3832 5 19.3832H19C20.1 19.3832 21 18.4832 21 17.3832V7.38318C21 6.28318 20.1 5.38318 19 5.38318ZM18 17.3832H6C5.45 17.3832 5 16.9332 5 16.3832V8.38318C5 7.83318 5.45 7.38318 6 7.38318H18C18.55 7.38318 19 7.83318 19 8.38318V16.3832C19 16.9332 18.55 17.3832 18 17.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
