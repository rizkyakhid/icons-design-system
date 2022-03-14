import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IHvacIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HvacIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IHvacIconProps) {
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
        d="M12 16.3833C13.01 16.3833 13.91 15.9933 14.62 15.3833H9.38C10.09 15.9933 10.99 16.3833 12 16.3833Z"
        fill={colorCode}
      />
      <path
        d="M8.56 14.3833H15.45C15.71 13.9333 15.89 13.4233 15.96 12.8833H8.06C8.12 13.4233 8.29 13.9333 8.56 14.3833Z"
        fill={colorCode}
      />
      <path
        d="M12 8.3833C10.99 8.3833 10.09 8.7733 9.38 9.3833H14.62C13.91 8.7733 13.01 8.3833 12 8.3833Z"
        fill={colorCode}
      />
      <path
        d="M8.55999 10.3833C8.29999 10.8333 8.11999 11.3433 8.04999 11.8833H15.95C15.88 11.3433 15.71 10.8333 15.44 10.3833H8.55999Z"
        fill={colorCode}
      />
      <path
        d="M19 3.3833H5C3.9 3.3833 3 4.2833 3 5.3833V19.3833C3 20.4833 3.9 21.3833 5 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V5.3833C21 4.2833 20.1 3.3833 19 3.3833ZM12 18.3833C8.69 18.3833 6 15.6933 6 12.3833C6 9.0733 8.69 6.3833 12 6.3833C15.31 6.3833 18 9.0733 18 12.3833C18 15.6933 15.31 18.3833 12 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
