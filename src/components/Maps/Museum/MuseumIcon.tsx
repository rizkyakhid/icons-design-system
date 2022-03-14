import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMuseumIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MuseumIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMuseumIconProps) {
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
        d="M21.5 11.3833C21.78 11.3833 22 11.1633 22 10.8833V9.6433C22 9.4833 21.92 9.3233 21.79 9.2333L12.57 2.7833C12.23 2.5433 11.77 2.5433 11.42 2.7833L2.21 9.2333C2.08 9.3233 2 9.4833 2 9.6433V10.8833C2 11.1633 2.22 11.3833 2.5 11.3833H4V20.3833H3C2.45 20.3833 2 20.8333 2 21.3833C2 21.9333 2.45 22.3833 3 22.3833H21C21.55 22.3833 22 21.9333 22 21.3833C22 20.8333 21.55 20.3833 21 20.3833H20V11.3833H21.5ZM16 17.3833C16 17.9333 15.55 18.3833 15 18.3833C14.45 18.3833 14 17.9333 14 17.3833V14.3833L12.83 16.1333C12.43 16.7233 11.56 16.7233 11.17 16.1333L10 14.3833V17.3833C10 17.9333 9.55 18.3833 9 18.3833C8.45 18.3833 8 17.9333 8 17.3833V12.6833C8 11.9633 8.58 11.3833 9.3 11.3833C9.73 11.3833 10.14 11.6033 10.38 11.9633L12 14.3833L13.61 11.9633C13.86 11.6033 14.26 11.3833 14.7 11.3833C15.42 11.3833 16 11.9633 16 12.6833V17.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
