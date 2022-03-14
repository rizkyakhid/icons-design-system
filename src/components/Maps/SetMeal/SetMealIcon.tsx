import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ISetMealIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SetMealIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ISetMealIconProps) {
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
        d="M20.3 17.9833L3.83 18.8433C3.42 18.8633 3.06 18.5433 3.04 18.1333C3.02 17.7233 3.34 17.3633 3.75 17.3433L20.23 16.4833C20.64 16.4633 21 16.7833 21.02 17.1933C21.04 17.6033 20.72 17.9633 20.3 17.9833ZM20.25 19.8633H3.75C3.34 19.8633 3 20.2033 3 20.6133C3 21.0233 3.34 21.3633 3.75 21.3633H20.25C20.66 21.3633 21 21.0233 21 20.6133C21 20.2033 20.66 19.8633 20.25 19.8633ZM22 5.3833V12.3833C22 13.4833 21.1 14.3833 20 14.3833H4C2.9 14.3833 2 13.4833 2 12.3833V5.3833C2 4.2833 2.9 3.3833 4 3.3833H20C21.1 3.3833 22 4.2833 22 5.3833ZM19.12 6.4733C17.87 6.7433 16.93 7.5833 16.79 8.6133C16.15 7.8833 14.06 5.8833 10.25 5.8833C6.81 5.8833 4.77 7.5133 3.94 8.3733C3.66 8.6633 3.66 9.1133 3.94 9.4033C4.77 10.2633 6.81 11.8933 10.25 11.8933C14.06 11.8933 16.15 9.8933 16.79 9.1633C16.93 10.1833 17.87 11.0233 19.12 11.3033C19.58 11.4033 20 11.0233 20 10.5633V7.2233C20 6.7533 19.57 6.3733 19.12 6.4733Z"
        fill={colorCode}
      />
    </svg>
  );
}
