import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IStreetviewIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StreetviewIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IStreetviewIconProps) {
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
        d="M12.56 14.7133C12.22 14.9833 12 15.4133 12 15.8833V21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V13.4033C20.06 13.0733 19.05 12.8833 18 12.8833C15.97 12.8833 14.07 13.5833 12.56 14.7133Z"
        fill={colorCode}
      />
      <path
        d="M18 11.3833C20.7614 11.3833 23 9.14472 23 6.3833C23 3.62188 20.7614 1.3833 18 1.3833C15.2386 1.3833 13 3.62188 13 6.3833C13 9.14472 15.2386 11.3833 18 11.3833Z"
        fill={colorCode}
      />
      <path
        d="M11.5 6.3833C11.5 5.3033 11.77 4.2833 12.24 3.3833H5C3.9 3.3833 3 4.2833 3 5.3833V19.3833C3 19.9333 3.23 20.4333 3.59 20.7933L13.41 10.9733C12.23 9.8033 11.5 8.1833 11.5 6.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
