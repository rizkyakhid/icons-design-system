import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMenuBookIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MenuBookIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMenuBookIconProps) {
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
        d="M17.5 4.8833C15.55 4.8833 13.45 5.2833 12 6.3833C10.55 5.2833 8.45 4.8833 6.5 4.8833C5.05 4.8833 3.51 5.1033 2.22 5.6733C1.49 6.0033 1 6.7133 1 7.5233V18.8033C1 20.1033 2.22 21.0633 3.48 20.7433C4.46 20.4933 5.5 20.3833 6.5 20.3833C8.06 20.3833 9.72 20.6433 11.06 21.3033C11.66 21.6033 12.34 21.6033 12.93 21.3033C14.27 20.6333 15.93 20.3833 17.49 20.3833C18.49 20.3833 19.53 20.4933 20.51 20.7433C21.77 21.0733 22.99 20.1133 22.99 18.8033V7.5233C22.99 6.7133 22.5 6.0033 21.77 5.6733C20.49 5.1033 18.95 4.8833 17.5 4.8833ZM21 17.6133C21 18.2433 20.42 18.7033 19.8 18.5933C19.05 18.4533 18.27 18.3933 17.5 18.3933C15.8 18.3933 13.35 19.0433 12 19.8933V8.3833C13.35 7.5333 15.8 6.8833 17.5 6.8833C18.42 6.8833 19.33 6.9733 20.2 7.1633C20.66 7.2633 21 7.6733 21 8.1433V17.6133Z"
        fill={colorCode}
      />
      <path
        d="M13.98 11.3933C13.66 11.3933 13.37 11.1933 13.27 10.8733C13.14 10.4833 13.36 10.0533 13.75 9.93331C15.29 9.43331 17.28 9.27331 19.11 9.48331C19.52 9.53331 19.82 9.90331 19.77 10.3133C19.72 10.7233 19.35 11.0233 18.94 10.9733C17.32 10.7833 15.55 10.9333 14.21 11.3633C14.13 11.3733 14.05 11.3933 13.98 11.3933Z"
        fill={colorCode}
      />
      <path
        d="M13.98 14.0533C13.66 14.0533 13.37 13.8533 13.27 13.5333C13.14 13.1433 13.36 12.7133 13.75 12.5933C15.28 12.0933 17.28 11.9333 19.11 12.1433C19.52 12.1933 19.82 12.5633 19.77 12.9733C19.72 13.3833 19.35 13.6833 18.94 13.6333C17.32 13.4433 15.55 13.5933 14.21 14.0233C14.13 14.0433 14.05 14.0533 13.98 14.0533Z"
        fill={colorCode}
      />
      <path
        d="M13.98 16.7133C13.66 16.7133 13.37 16.5133 13.27 16.1933C13.14 15.8033 13.36 15.3733 13.75 15.2533C15.28 14.7533 17.28 14.5933 19.11 14.8033C19.52 14.8533 19.82 15.2233 19.77 15.6333C19.72 16.0433 19.35 16.3333 18.94 16.2933C17.32 16.1033 15.55 16.2533 14.21 16.6833C14.13 16.7033 14.05 16.7133 13.98 16.7133Z"
        fill={colorCode}
      />
    </svg>
  );
}
