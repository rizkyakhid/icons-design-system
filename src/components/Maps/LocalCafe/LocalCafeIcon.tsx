import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalCafeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalCafeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalCafeIconProps) {
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
        d="M20 3.3833H6C4.9 3.3833 4 4.2833 4 5.3833V13.3833C4 15.5933 5.79 17.3833 8 17.3833H14C16.21 17.3833 18 15.5933 18 13.3833V10.3833H20C21.1 10.3833 22 9.4833 22 8.3833V5.3833C22 4.2833 21.1 3.3833 20 3.3833ZM20 8.3833H18V5.3833H20V8.3833ZM3 21.3833H19C19.55 21.3833 20 20.9333 20 20.3833C20 19.8333 19.55 19.3833 19 19.3833H3C2.45 19.3833 2 19.8333 2 20.3833C2 20.9333 2.45 21.3833 3 21.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
