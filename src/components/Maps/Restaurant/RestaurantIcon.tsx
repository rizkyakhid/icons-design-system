import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IRestaurantIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RestaurantIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IRestaurantIconProps) {
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
        d="M16 6.3833V12.3833C16 13.4833 16.9 14.3833 18 14.3833H19V21.3833C19 21.9333 19.45 22.3833 20 22.3833C20.55 22.3833 21 21.9333 21 21.3833V3.5133C21 2.8633 20.39 2.3833 19.76 2.5333C17.6 3.0633 16 4.8933 16 6.3833ZM11 9.3833H9V3.3833C9 2.8333 8.55 2.3833 8 2.3833C7.45 2.3833 7 2.8333 7 3.3833V9.3833H5V3.3833C5 2.8333 4.55 2.3833 4 2.3833C3.45 2.3833 3 2.8333 3 3.3833V9.3833C3 11.5933 4.79 13.3833 7 13.3833V21.3833C7 21.9333 7.45 22.3833 8 22.3833C8.55 22.3833 9 21.9333 9 21.3833V13.3833C11.21 13.3833 13 11.5933 13 9.3833V3.3833C13 2.8333 12.55 2.3833 12 2.3833C11.45 2.3833 11 2.8333 11 3.3833V9.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
