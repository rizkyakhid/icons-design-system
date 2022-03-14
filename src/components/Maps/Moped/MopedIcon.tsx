import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMopedIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MopedIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMopedIconProps) {
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
        d="M19 7.3833C19 6.2833 18.1 5.3833 17 5.3833H15C14.45 5.3833 14 5.8333 14 6.3833C14 6.9333 14.45 7.3833 15 7.3833H17V10.0333L13.52 14.3833H10V10.3833C10 9.8333 9.55 9.3833 9 9.3833H6C3.79 9.3833 2 11.1733 2 13.3833V16.3833H4C4 18.0433 5.34 19.3833 7 19.3833C8.66 19.3833 10 18.0433 10 16.3833H14.48L19 10.7333V7.3833ZM7 17.3833C6.45 17.3833 6 16.9333 6 16.3833H8C8 16.9333 7.55 17.3833 7 17.3833Z"
        fill={colorCode}
      />
      <path
        d="M9 6.3833H6C5.45 6.3833 5 6.8333 5 7.3833C5 7.9333 5.45 8.3833 6 8.3833H9C9.55 8.3833 10 7.9333 10 7.3833C10 6.8333 9.55 6.3833 9 6.3833Z"
        fill={colorCode}
      />
      <path
        d="M19 13.3833C17.34 13.3833 16 14.7233 16 16.3833C16 18.0433 17.34 19.3833 19 19.3833C20.66 19.3833 22 18.0433 22 16.3833C22 14.7233 20.66 13.3833 19 13.3833ZM19 17.3833C18.45 17.3833 18 16.9333 18 16.3833C18 15.8333 18.45 15.3833 19 15.3833C19.55 15.3833 20 15.8333 20 16.3833C20 16.9333 19.55 17.3833 19 17.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
