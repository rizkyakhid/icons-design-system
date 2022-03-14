import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMyLocationIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MyLocationIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMyLocationIconProps) {
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
        d="M12 8.3833C9.79 8.3833 8 10.1733 8 12.3833C8 14.5933 9.79 16.3833 12 16.3833C14.21 16.3833 16 14.5933 16 12.3833C16 10.1733 14.21 8.3833 12 8.3833ZM20.94 11.3833C20.48 7.2133 17.17 3.9033 13 3.4433V2.3833C13 1.8333 12.55 1.3833 12 1.3833C11.45 1.3833 11 1.8333 11 2.3833V3.4433C6.83 3.9033 3.52 7.2133 3.06 11.3833H2C1.45 11.3833 1 11.8333 1 12.3833C1 12.9333 1.45 13.3833 2 13.3833H3.06C3.52 17.5533 6.83 20.8633 11 21.3233V22.3833C11 22.9333 11.45 23.3833 12 23.3833C12.55 23.3833 13 22.9333 13 22.3833V21.3233C17.17 20.8633 20.48 17.5533 20.94 13.3833H22C22.55 13.3833 23 12.9333 23 12.3833C23 11.8333 22.55 11.3833 22 11.3833H20.94ZM12 19.3833C8.13 19.3833 5 16.2533 5 12.3833C5 8.5133 8.13 5.3833 12 5.3833C15.87 5.3833 19 8.5133 19 12.3833C19 16.2533 15.87 19.3833 12 19.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
