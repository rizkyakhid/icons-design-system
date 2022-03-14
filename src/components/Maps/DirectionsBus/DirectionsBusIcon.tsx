import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IDirectionsBusIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DirectionsBusIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IDirectionsBusIconProps) {
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
        d="M4 16.3833C4 17.2633 4.39 18.0533 5 18.6033V19.8833C5 20.7133 5.67 21.3833 6.5 21.3833C7.33 21.3833 8 20.7133 8 19.8833V19.3833H16V19.8833C16 20.7033 16.67 21.3833 17.5 21.3833C18.32 21.3833 19 20.7133 19 19.8833V18.6033C19.61 18.0533 20 17.2633 20 16.3833V6.3833C20 2.8833 16.42 2.3833 12 2.3833C7.58 2.3833 4 2.8833 4 6.3833V16.3833ZM7.5 17.3833C6.67 17.3833 6 16.7133 6 15.8833C6 15.0533 6.67 14.3833 7.5 14.3833C8.33 14.3833 9 15.0533 9 15.8833C9 16.7133 8.33 17.3833 7.5 17.3833ZM16.5 17.3833C15.67 17.3833 15 16.7133 15 15.8833C15 15.0533 15.67 14.3833 16.5 14.3833C17.33 14.3833 18 15.0533 18 15.8833C18 16.7133 17.33 17.3833 16.5 17.3833ZM18 11.3833H6V6.3833H18V11.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
