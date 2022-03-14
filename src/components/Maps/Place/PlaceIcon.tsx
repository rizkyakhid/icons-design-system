import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPlaceIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PlaceIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPlaceIconProps) {
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
        d="M12 12.3833C13.1 12.3833 14 11.4833 14 10.3833C14 9.2833 13.1 8.3833 12 8.3833C10.9 8.3833 10 9.2833 10 10.3833C10 11.4833 10.9 12.3833 12 12.3833ZM12 2.3833C16.2 2.3833 20 5.6033 20 10.5833C20 13.7633 17.55 17.5033 12.66 21.8133C12.28 22.1433 11.71 22.1433 11.33 21.8133C6.45 17.5033 4 13.7633 4 10.5833C4 5.6033 7.8 2.3833 12 2.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
