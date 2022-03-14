import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IElectricMopedIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ElectricMopedIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IElectricMopedIconProps) {
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
        d="M19 5.3833C19 4.2833 18.1 3.3833 17 3.3833H15C14.45 3.3833 14 3.8333 14 4.3833C14 4.9333 14.45 5.3833 15 5.3833H17V8.0333L13.52 12.3833H10V8.3833C10 7.8333 9.55 7.3833 9 7.3833H6C3.79 7.3833 2 9.1733 2 11.3833V14.3833H4C4 16.0433 5.34 17.3833 7 17.3833C8.66 17.3833 10 16.0433 10 14.3833H14.48L19 8.7333V5.3833ZM7 15.3833C6.45 15.3833 6 14.9333 6 14.3833H8C8 14.9333 7.55 15.3833 7 15.3833Z"
        fill={colorCode}
      />
      <path
        d="M9 4.3833H6C5.45 4.3833 5 4.8333 5 5.3833C5 5.9333 5.45 6.3833 6 6.3833H9C9.55 6.3833 10 5.9333 10 5.3833C10 4.8333 9.55 4.3833 9 4.3833Z"
        fill={colorCode}
      />
      <path
        d="M19 11.3833C17.34 11.3833 16 12.7233 16 14.3833C16 16.0433 17.34 17.3833 19 17.3833C20.66 17.3833 22 16.0433 22 14.3833C22 12.7233 20.66 11.3833 19 11.3833ZM19 15.3833C18.45 15.3833 18 14.9333 18 14.3833C18 13.8333 18.45 13.3833 19 13.3833C19.55 13.3833 20 13.8333 20 14.3833C20 14.9333 19.55 15.3833 19 15.3833Z"
        fill={colorCode}
      />
      <path
        d="M7 20.3833H11V18.3833L17 21.3833H13V23.3833L7 20.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
