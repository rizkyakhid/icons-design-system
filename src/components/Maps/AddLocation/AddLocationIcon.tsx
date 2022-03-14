import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAddLocationIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddLocationIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAddLocationIconProps) {
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
        d="M13 7.3833C13 6.8333 12.56 6.3833 12 6.3833C11.45 6.3833 11 6.8233 11 7.3833V9.3833H9C8.45 9.3833 8 9.8233 8 10.3833C8 10.9333 8.44 11.3833 9 11.3833H11V13.3833C11 13.9333 11.44 14.3833 12 14.3833C12.55 14.3833 13 13.9433 13 13.3833V11.3833H15C15.55 11.3833 16 10.9433 16 10.3833C16 9.8333 15.56 9.3833 15 9.3833H13V7.3833ZM12 2.3833C16.2 2.3833 20 5.6033 20 10.5833C20 13.7633 17.55 17.5033 12.66 21.8133C12.28 22.1433 11.71 22.1433 11.33 21.8133C6.45 17.5033 4 13.7633 4 10.5833C4 5.6033 7.8 2.3833 12 2.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
