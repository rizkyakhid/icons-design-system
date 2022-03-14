import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface INoTransferIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NoTransferIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: INoTransferIconProps) {
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
        d="M5.78 3.3333C7.24 2.5433 9.48 2.3833 12 2.3833C16.42 2.3833 20 2.8833 20 6.3833V16.3833C20 16.7333 19.92 17.0533 19.81 17.3633L13.83 11.3833H18V6.3833H8.83L5.78 3.3333ZM20.49 22.2833C20.1 22.6733 19.47 22.6733 19.08 22.2833L18.07 21.2733C17.89 21.3433 17.7 21.3833 17.5 21.3833C16.67 21.3833 16 20.7033 16 19.8833V19.3833H8V19.8833C8 20.7133 7.33 21.3833 6.5 21.3833C5.67 21.3833 5 20.7133 5 19.8833V18.6033C4.39 18.0533 4 17.2633 4 16.3833V7.2133L2.1 5.3133C1.71 4.9233 1.71 4.2933 2.1 3.9033C2.49 3.5133 3.12 3.5133 3.51 3.9033L20.48 20.8733C20.88 21.2633 20.88 21.8933 20.49 22.2833ZM9 15.8833C9 15.0533 8.33 14.3833 7.5 14.3833C6.67 14.3833 6 15.0533 6 15.8833C6 16.7133 6.67 17.3833 7.5 17.3833C8.33 17.3833 9 16.7133 9 15.8833ZM8.17 11.3833L6 9.2133V11.3833H8.17Z"
        fill={colorCode}
      />
    </svg>
  );
}
