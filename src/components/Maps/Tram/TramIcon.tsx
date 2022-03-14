import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITramIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TramIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITramIconProps) {
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
        d="M13 5.3833L13.75 3.8833H17V2.3833H7V3.8833H11.75L11 5.3833C7.87 5.4733 5 6.1133 5 8.8833V17.3833C5 18.8833 6.11 20.1133 7.55 20.3333L6.36 21.5233C6.04 21.8433 6.26 22.3833 6.71 22.3833H7.8C7.93 22.3833 8.06 22.3333 8.15 22.2333L10 20.3833H14L15.85 22.2333C15.94 22.3233 16.07 22.3833 16.2 22.3833H17.29C17.74 22.3833 17.96 21.8433 17.64 21.5333L16.45 20.3433C17.89 20.1133 19 18.8833 19 17.3833V8.8833C19 6.1133 16.13 5.4733 13 5.3833ZM12 18.8833C11.17 18.8833 10.5 18.2133 10.5 17.3833C10.5 16.5533 11.17 15.8833 12 15.8833C12.83 15.8833 13.5 16.5533 13.5 17.3833C13.5 18.2133 12.83 18.8833 12 18.8833ZM17 14.3833H7V9.3833H17V14.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
