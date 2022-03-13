import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBrightness1IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Brightness1Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBrightness1IconProps) {
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
        d="M12 22.3832C17.5228 22.3832 22 17.906 22 12.3832C22 6.86033 17.5228 2.38318 12 2.38318C6.47715 2.38318 2 6.86033 2 12.3832C2 17.906 6.47715 22.3832 12 22.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
