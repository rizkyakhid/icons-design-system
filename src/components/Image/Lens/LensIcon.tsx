import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILensIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LensIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILensIconProps) {
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
        d="M12 2.38318C6.48 2.38318 2 6.86318 2 12.3832C2 17.9032 6.48 22.3832 12 22.3832C17.52 22.3832 22 17.9032 22 12.3832C22 6.86318 17.52 2.38318 12 2.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
