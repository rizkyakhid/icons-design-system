import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAtmIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AtmIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAtmIconProps) {
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
        d="M8 10.1333C8 10.5433 8.34 10.8833 8.75 10.8833H10.25V14.6333C10.25 15.0433 10.59 15.3833 11 15.3833C11.41 15.3833 11.75 15.0433 11.75 14.6333V10.8833H13.25C13.66 10.8833 14 10.5433 14 10.1333C14 9.7233 13.66 9.3833 13.25 9.3833H8.75C8.34 9.3833 8 9.7233 8 10.1333ZM6 9.3833H3C2.45 9.3833 2 9.8333 2 10.3833V14.6333C2 15.0433 2.34 15.3833 2.75 15.3833C3.16 15.3833 3.5 15.0433 3.5 14.6333V13.8833H5.5V14.6333C5.5 15.0433 5.84 15.3833 6.25 15.3833C6.66 15.3833 7 15.0433 7 14.6333V10.3833C7 9.8333 6.55 9.3833 6 9.3833ZM5.5 12.3833H3.5V10.8833H5.5V12.3833ZM21 9.3833H16.5C15.95 9.3833 15.5 9.8333 15.5 10.3833V14.6333C15.5 15.0433 15.84 15.3833 16.25 15.3833C16.66 15.3833 17 15.0433 17 14.6333V10.8833H18V13.6333C18 14.0433 18.34 14.3833 18.75 14.3833C19.16 14.3833 19.5 14.0433 19.5 13.6333V10.8733H20.5V14.6333C20.5 15.0433 20.84 15.3833 21.25 15.3833C21.66 15.3833 22 15.0433 22 14.6333V10.3833C22 9.8333 21.55 9.3833 21 9.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
