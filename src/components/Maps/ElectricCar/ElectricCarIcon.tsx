import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IdElectricCarIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function dElectricCarIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IdElectricCarIconProps) {
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
        d="M18.92 2.3933C18.72 1.8033 18.16 1.3833 17.5 1.3833H6.5C5.84 1.3833 5.29 1.8033 5.08 2.3933L3.11 8.0633C3.04 8.2733 3 8.4933 3 8.7233V15.8833C3 16.7133 3.67 17.3833 4.5 17.3833C5.33 17.3833 6 16.7133 6 15.8833V15.3833H18V15.8833C18 16.7033 18.67 17.3833 19.5 17.3833C20.32 17.3833 21 16.7133 21 15.8833V8.7233C21 8.5033 20.96 8.2733 20.89 8.0633L18.92 2.3933ZM6.5 12.3833C5.67 12.3833 5 11.7133 5 10.8833C5 10.0533 5.67 9.3833 6.5 9.3833C7.33 9.3833 8 10.0533 8 10.8833C8 11.7133 7.33 12.3833 6.5 12.3833ZM17.5 12.3833C16.67 12.3833 16 11.7133 16 10.8833C16 10.0533 16.67 9.3833 17.5 9.3833C18.33 9.3833 19 10.0533 19 10.8833C19 11.7133 18.33 12.3833 17.5 12.3833ZM5 7.3833L6.27 3.5633C6.41 3.1633 6.79 2.8833 7.22 2.8833H16.78C17.21 2.8833 17.59 3.1633 17.73 3.5633L19 7.3833H5Z"
        fill={colorCode}
      />
      <path
        d="M7 20.3833H11V18.3833L17 21.3833H13V23.3833L7 20.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
