import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPanoramaFishEyeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PanoramaFishEyeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPanoramaFishEyeIconProps) {
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
        d="M12 2.38318C6.47 2.38318 2 6.85318 2 12.3832C2 17.9132 6.47 22.3832 12 22.3832C17.53 22.3832 22 17.9132 22 12.3832C22 6.85318 17.53 2.38318 12 2.38318ZM12 20.3832C7.59 20.3832 4 16.7932 4 12.3832C4 7.97318 7.59 4.38318 12 4.38318C16.41 4.38318 20 7.97318 20 12.3832C20 16.7932 16.41 20.3832 12 20.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
