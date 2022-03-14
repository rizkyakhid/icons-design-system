import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICategoryIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CategoryIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICategoryIconProps) {
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
        d="M11.15 3.7833L7.43 9.8633C7.02 10.5233 7.5 11.3833 8.28 11.3833H15.71C16.49 11.3833 16.97 10.5233 16.56 9.8633L12.85 3.7833C12.46 3.1433 11.54 3.1433 11.15 3.7833Z"
        fill={colorCode}
      />
      <path
        d="M17.5 22.3833C19.9853 22.3833 22 20.3686 22 17.8833C22 15.398 19.9853 13.3833 17.5 13.3833C15.0147 13.3833 13 15.398 13 17.8833C13 20.3686 15.0147 22.3833 17.5 22.3833Z"
        fill={colorCode}
      />
      <path
        d="M4 21.8833H10C10.55 21.8833 11 21.4333 11 20.8833V14.8833C11 14.3333 10.55 13.8833 10 13.8833H4C3.45 13.8833 3 14.3333 3 14.8833V20.8833C3 21.4333 3.45 21.8833 4 21.8833Z"
        fill={colorCode}
      />
    </svg>
  );
}
