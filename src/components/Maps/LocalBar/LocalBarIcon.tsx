import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalBarIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalBarIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalBarIconProps) {
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
        d="M21 4.8333C21 4.0333 20.35 3.3833 19.55 3.3833H4.45C3.65 3.3833 3 4.0333 3 4.8333C3 5.1833 3.13 5.5333 3.37 5.7933L11 14.3833V19.3833H7C6.45 19.3833 6 19.8333 6 20.3833C6 20.9333 6.45 21.3833 7 21.3833H17C17.55 21.3833 18 20.9333 18 20.3833C18 19.8333 17.55 19.3833 17 19.3833H13V14.3833L20.63 5.7933C20.87 5.5333 21 5.1833 21 4.8333ZM7.43 7.3833L5.66 5.3833H18.35L16.57 7.3833H7.43Z"
        fill={colorCode}
      />
    </svg>
  );
}
