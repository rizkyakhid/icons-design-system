import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ISubwayIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SubwayIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ISubwayIconProps) {
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
        d="M8.5 17.3833C9.05228 17.3833 9.5 16.9356 9.5 16.3833C9.5 15.831 9.05228 15.3833 8.5 15.3833C7.94772 15.3833 7.5 15.831 7.5 16.3833C7.5 16.9356 7.94772 17.3833 8.5 17.3833Z"
        fill={colorCode}
      />
      <path
        d="M15.5 17.3833C16.0523 17.3833 16.5 16.9356 16.5 16.3833C16.5 15.831 16.0523 15.3833 15.5 15.3833C14.9477 15.3833 14.5 15.831 14.5 16.3833C14.5 16.9356 14.9477 17.3833 15.5 17.3833Z"
        fill={colorCode}
      />
      <path
        d="M7.01 9.3833H17.01V14.3833H7.01V9.3833ZM17.8 3.1833C16 2.4733 13.86 2.3833 12 2.3833C10.14 2.3833 8 2.4733 6.2 3.1833C3.53 4.2233 2 6.4333 2 9.2433V22.3833H22V9.2433C22 6.4333 20.47 4.2233 17.8 3.1833ZM18 15.8833C18 17.4233 16.84 18.6733 15.35 18.8433L16.5 20.0033V20.3833H14.83L13.33 18.8833H10.67L9.17 20.3833H7.5V20.0033L8.65 18.8433C7.16 18.6733 6 17.4233 6 15.8833V9.3833C6 6.7533 9 6.3833 12 6.3833C15 6.3833 18 6.7533 18 9.3833V15.8833Z"
        fill={colorCode}
      />
    </svg>
  );
}
