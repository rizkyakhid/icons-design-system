import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFastfoodIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FastfoodIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFastfoodIconProps) {
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
        d="M21.9 5.3833H18V2.3833C18 1.8333 17.55 1.3833 17 1.3833C16.45 1.3833 16 1.8333 16 2.3833V5.3833H12.1C11.51 5.3833 11.05 5.8933 11.1 6.4833L11.22 7.6933C14.9 8.5433 18 11.1533 18 15.3833L18.02 23.3833H19.72C20.56 23.3833 21.25 22.7333 21.35 21.9133L22.89 6.4833C22.95 5.8933 22.49 5.3833 21.9 5.3833ZM15 21.3833H2C1.45 21.3833 1 21.8333 1 22.3833C1 22.9333 1.45 23.3833 2 23.3833H15C15.55 23.3833 16 22.9333 16 22.3833C16 21.8333 15.55 21.3833 15 21.3833ZM2.1 15.3833H14.9C15.52 15.3833 16.01 14.8233 15.89 14.2233C15.24 10.9933 11.87 9.3733 8.5 9.3733C5.13 9.3733 1.77 10.9933 1.11 14.2233C0.99 14.8233 1.49 15.3833 2.1 15.3833ZM15 17.3833H2C1.45 17.3833 1 17.8333 1 18.3833C1 18.9333 1.45 19.3833 2 19.3833H15C15.55 19.3833 16 18.9333 16 18.3833C16 17.8333 15.55 17.3833 15 17.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
