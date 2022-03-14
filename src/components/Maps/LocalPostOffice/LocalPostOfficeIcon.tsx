import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalPostOfficeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalPostOfficeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalPostOfficeIconProps) {
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
        d="M20 4.3833H4C2.9 4.3833 2 5.2833 2 6.3833V18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V6.3833C22 5.2833 21.1 4.3833 20 4.3833ZM19.6 8.6333L13.06 12.7233C12.41 13.1333 11.59 13.1333 10.94 12.7233L4.4 8.6333C4.15 8.4733 4 8.2033 4 7.9133C4 7.2433 4.73 6.8433 5.3 7.1933L12 11.3833L18.7 7.1933C19.27 6.8433 20 7.2433 20 7.9133C20 8.2033 19.85 8.4733 19.6 8.6333Z"
        fill={colorCode}
      />
    </svg>
  );
}
