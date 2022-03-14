import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IDirectionsTransitIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DirectionsTransitIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IDirectionsTransitIconProps) {
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
        d="M12 2.3833C7.58 2.3833 4 2.8833 4 6.3833V15.8833C4 17.8133 5.57 19.3833 7.5 19.3833L6.35 20.5333C6.04 20.8433 6.26 21.3833 6.71 21.3833H17.3C17.75 21.3833 17.97 20.8433 17.65 20.5333L16.5 19.3833C18.43 19.3833 20 17.8133 20 15.8833V6.3833C20 2.8833 16.42 2.3833 12 2.3833ZM7.5 17.3833C6.67 17.3833 6 16.7133 6 15.8833C6 15.0533 6.67 14.3833 7.5 14.3833C8.33 14.3833 9 15.0533 9 15.8833C9 16.7133 8.33 17.3833 7.5 17.3833ZM11 11.3833H6V6.3833H11V11.3833ZM16.5 17.3833C15.67 17.3833 15 16.7133 15 15.8833C15 15.0533 15.67 14.3833 16.5 14.3833C17.33 14.3833 18 15.0533 18 15.8833C18 16.7133 17.33 17.3833 16.5 17.3833ZM18 11.3833H13V6.3833H18V11.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
