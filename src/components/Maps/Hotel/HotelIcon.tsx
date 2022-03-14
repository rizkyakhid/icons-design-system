import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IHotelIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HotelIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IHotelIconProps) {
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
        d="M7 13.3833C8.66 13.3833 10 12.0433 10 10.3833C10 8.7233 8.66 7.3833 7 7.3833C5.34 7.3833 4 8.7233 4 10.3833C4 12.0433 5.34 13.3833 7 13.3833ZM19 7.3833H13C11.9 7.3833 11 8.2833 11 9.3833V14.3833H3V6.3833C3 5.8333 2.55 5.3833 2 5.3833C1.45 5.3833 1 5.8333 1 6.3833V19.3833C1 19.9333 1.45 20.3833 2 20.3833C2.55 20.3833 3 19.9333 3 19.3833V17.3833H21V19.3833C21 19.9333 21.45 20.3833 22 20.3833C22.55 20.3833 23 19.9333 23 19.3833V11.3833C23 9.1733 21.21 7.3833 19 7.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
