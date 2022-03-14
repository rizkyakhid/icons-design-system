import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalConvenienceStoreIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalConvenienceStoreIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalConvenienceStoreIconProps) {
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
        d="M21 7.3833H19V5.3833C19 4.8333 18.55 4.3833 18 4.3833H6C5.45 4.3833 5 4.8333 5 5.3833V7.3833H3C2.45 7.3833 2 7.8333 2 8.3833V19.3833C2 19.9333 2.45 20.3833 3 20.3833H9C9.55 20.3833 10 19.9333 10 19.3833V16.3833H14V19.3833C14 19.9333 14.45 20.3833 15 20.3833H21C21.55 20.3833 22 19.9333 22 19.3833V8.3833C22 7.8333 21.55 7.3833 21 7.3833ZM11 9.3833C11 9.9333 10.55 10.3833 10 10.3833H9V11.3833H10.5C10.78 11.3833 11 11.6033 11 11.8833C11 12.1633 10.78 12.3833 10.5 12.3833H9C8.45 12.3833 8 11.9333 8 11.3833V10.3833C8 9.8333 8.45 9.3833 9 9.3833H10V8.3833H8.5C8.22 8.3833 8 8.1633 8 7.8833C8 7.6033 8.22 7.3833 8.5 7.3833H10C10.55 7.3833 11 7.8333 11 8.3833V9.3833ZM16 11.8833C16 12.1633 15.78 12.3833 15.5 12.3833C15.22 12.3833 15 12.1633 15 11.8833V10.3833H14C13.45 10.3833 13 9.9333 13 9.3833V7.8833C13 7.6033 13.22 7.3833 13.5 7.3833C13.78 7.3833 14 7.6033 14 7.8833V9.3833H15V7.8833C15 7.6033 15.22 7.3833 15.5 7.3833C15.78 7.3833 16 7.6033 16 7.8833V11.8833Z"
        fill={colorCode}
      />
    </svg>
  );
}
