import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAddLocationAltIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddLocationAltIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAddLocationAltIconProps) {
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
        d="M19 1.3833C19.55 1.3833 20 1.8333 20 2.3833V4.3833H22C22.55 4.3833 23 4.8333 23 5.3833C23 5.9333 22.55 6.3833 22 6.3833H20V8.3833C20 8.9333 19.55 9.3833 19 9.3833C18.45 9.3833 18 8.9333 18 8.3833V6.3833H16C15.45 6.3833 15 5.9333 15 5.3833C15 4.8333 15.45 4.3833 16 4.3833H18V2.3833C18 1.8333 18.45 1.3833 19 1.3833ZM12 13.3833C13.1 13.3833 14 12.4833 14 11.3833C14 10.2833 13.1 9.3833 12 9.3833C10.9 9.3833 10 10.2833 10 11.3833C10 12.4833 10.9 13.3833 12 13.3833ZM14.72 3.8533C14.28 4.2133 14 4.7633 14 5.3833C14 6.4833 14.9 7.3833 16 7.3833H17V8.3833C17 9.4833 17.9 10.3833 19 10.3833C19.32 10.3833 19.62 10.3033 19.89 10.1733C19.96 10.6233 20 11.0933 20 11.5833C20 14.7633 17.55 18.5033 12.66 22.8133C12.28 23.1433 11.71 23.1433 11.33 22.8133C6.45 18.5033 4 14.7633 4 11.5833C4 6.6033 7.8 3.3833 12 3.3833C12.94 3.3833 13.86 3.5433 14.72 3.8533Z"
        fill={colorCode}
      />
    </svg>
  );
}
