import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IDirectionsRailwayIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DirectionsRailwayIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IDirectionsRailwayIconProps) {
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
        d="M4 15.8833C4 17.8133 5.57 19.3833 7.5 19.3833L6 20.8833V21.3833H18V20.8833L16.5 19.3833C18.43 19.3833 20 17.8133 20 15.8833V5.3833C20 1.8833 16.42 1.3833 12 1.3833C7.58 1.3833 4 1.8833 4 5.3833V15.8833ZM12 17.3833C10.9 17.3833 10 16.4833 10 15.3833C10 14.2833 10.9 13.3833 12 13.3833C13.1 13.3833 14 14.2833 14 15.3833C14 16.4833 13.1 17.3833 12 17.3833ZM18 10.3833H6V5.3833H18V10.3833ZM4 15.8833C4 17.8133 5.57 19.3833 7.5 19.3833L6.36 20.5333C6.04 20.8433 6.26 21.3833 6.71 21.3833H17.29C17.74 21.3833 17.96 20.8433 17.64 20.5333L16.5 19.3833C18.43 19.3833 20 17.8133 20 15.8833V5.3833C20 1.8833 16.42 1.3833 12 1.3833C7.58 1.3833 4 1.8833 4 5.3833V15.8833ZM12 17.3833C10.9 17.3833 10 16.4833 10 15.3833C10 14.2833 10.9 13.3833 12 13.3833C13.1 13.3833 14 14.2833 14 15.3833C14 16.4833 13.1 17.3833 12 17.3833ZM18 10.3833H6V5.3833H18V10.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
