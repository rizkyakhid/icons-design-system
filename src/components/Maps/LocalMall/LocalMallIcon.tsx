import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalMallIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalMallIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalMallIconProps) {
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
        d="M19 6.3833H17C17 3.6233 14.76 1.3833 12 1.3833C9.24 1.3833 7 3.6233 7 6.3833H5C3.9 6.3833 3 7.2833 3 8.3833V20.3833C3 21.4833 3.9 22.3833 5 22.3833H19C20.1 22.3833 21 21.4833 21 20.3833V8.3833C21 7.2833 20.1 6.3833 19 6.3833ZM12 3.3833C13.66 3.3833 15 4.7233 15 6.3833H9C9 4.7233 10.34 3.3833 12 3.3833ZM12 13.3833C9.67 13.3833 7.71 11.7933 7.16 9.6333C6.99 9.0033 7.48 8.3833 8.13 8.3833C8.6 8.3833 8.98 8.7233 9.11 9.1833C9.46 10.4533 10.62 11.3833 12 11.3833C13.38 11.3833 14.54 10.4533 14.89 9.1833C15.02 8.7233 15.4 8.3833 15.87 8.3833C16.52 8.3833 17 9.0033 16.84 9.6333C16.29 11.7933 14.33 13.3833 12 13.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
