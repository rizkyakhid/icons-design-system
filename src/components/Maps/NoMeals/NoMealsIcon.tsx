import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface INoMealsIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NoMealsIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: INoMealsIconProps) {
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
        d="M21 18.5533L19 16.5533V14.3833H18C16.9 14.3833 16 13.4833 16 12.3833V6.3833C16 4.8933 17.6 3.0633 19.76 2.5333C20.39 2.3833 21 2.8633 21 3.5133V18.5533ZM21.19 22.9933C20.8 23.3833 20.17 23.3833 19.78 22.9933L10.02 13.2333C9.69003 13.3233 9.36003 13.3833 9.00003 13.3833V21.3833C9.00003 21.9333 8.55003 22.3833 8.00003 22.3833C7.45003 22.3833 7.00003 21.9333 7.00003 21.3833V13.3833C4.79003 13.3833 3.00003 11.5933 3.00003 9.3833V6.2133L1.39003 4.6033C1.00003 4.2133 1.00003 3.5833 1.39003 3.1933C1.78003 2.8033 2.41003 2.8033 2.80003 3.1933L21.18 21.5733C21.58 21.9633 21.58 22.6033 21.19 22.9933ZM6.17003 9.3833L5.00003 8.2133V9.3833H6.17003ZM13 9.3833V3.3833C13 2.8333 12.55 2.3833 12 2.3833C11.45 2.3833 11 2.8333 11 3.3833V8.5533L12.85 10.4033C12.94 10.0733 13 9.7433 13 9.3833ZM9.00003 3.3833C9.00003 2.8333 8.55003 2.3833 8.00003 2.3833C7.45003 2.3833 7.00003 2.8333 7.00003 3.3833V4.5533L9.00003 6.5533V3.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
