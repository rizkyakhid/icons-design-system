import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IWrongLocationIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WrongLocationIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IWrongLocationIconProps) {
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
        d="M14 10.3833V3.6433C13.35 3.4733 12.68 3.3833 12 3.3833C7.8 3.3833 4 6.6033 4 11.5833C4 14.7633 6.45 18.5033 11.34 22.8133C11.72 23.1433 12.29 23.1433 12.67 22.8133C17.55 18.5033 20 14.7633 20 11.5833C20 11.1733 19.96 10.7733 19.91 10.3833H14ZM12 13.3833C10.9 13.3833 10 12.4833 10 11.3833C10 10.2833 10.9 9.3833 12 9.3833C13.1 9.3833 14 10.2833 14 11.3833C14 12.4833 13.1 13.3833 12 13.3833Z"
        fill={colorCode}
      />
      <path
        d="M22.54 3.26332L21.12 1.84332L19 3.97332L16.88 1.84332L15.46 3.26332L17.59 5.38332L15.46 7.50332L16.88 8.92332L19 6.79332L21.12 8.92332L22.54 7.50332L20.41 5.38332L22.54 3.26332Z"
        fill={colorCode}
      />
    </svg>
  );
}
