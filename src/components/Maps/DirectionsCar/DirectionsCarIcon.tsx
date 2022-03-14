import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IDirectionsCarIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DirectionsCarIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IDirectionsCarIconProps) {
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
        d="M18.92 6.3933C18.72 5.8033 18.16 5.3833 17.5 5.3833H6.5C5.84 5.3833 5.29 5.8033 5.08 6.3933L3.11 12.0633C3.04 12.2733 3 12.4933 3 12.7233V19.8833C3 20.7133 3.67 21.3833 4.5 21.3833C5.33 21.3833 6 20.7133 6 19.8833V19.3833H18V19.8833C18 20.7033 18.67 21.3833 19.5 21.3833C20.32 21.3833 21 20.7133 21 19.8833V12.7233C21 12.5033 20.96 12.2733 20.89 12.0633L18.92 6.3933ZM6.5 16.3833C5.67 16.3833 5 15.7133 5 14.8833C5 14.0533 5.67 13.3833 6.5 13.3833C7.33 13.3833 8 14.0533 8 14.8833C8 15.7133 7.33 16.3833 6.5 16.3833ZM17.5 16.3833C16.67 16.3833 16 15.7133 16 14.8833C16 14.0533 16.67 13.3833 17.5 13.3833C18.33 13.3833 19 14.0533 19 14.8833C19 15.7133 18.33 16.3833 17.5 16.3833ZM5 11.3833L6.27 7.5633C6.41 7.1633 6.79 6.8833 7.22 6.8833H16.78C17.21 6.8833 17.59 7.1633 17.73 7.5633L19 11.3833H5Z"
        fill={colorCode}
      />
    </svg>
  );
}
