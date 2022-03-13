import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFilterHdrIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FilterHdrIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFilterHdrIconProps) {
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
        d="M13.2 7.45319L10.25 11.3832L12.5 14.3832C12.83 14.8232 12.74 15.4532 12.3 15.7832C11.86 16.1132 11.23 16.0332 10.9 15.5832C9.84999 14.1832 8.58999 12.5132 7.79999 11.4432C7.39999 10.9132 6.59999 10.9132 6.19999 11.4432L2.19999 16.7732C1.70999 17.4432 2.17999 18.3832 2.99999 18.3832H21C21.82 18.3832 22.29 17.4432 21.8 16.7832L14.8 7.45319C14.4 6.91319 13.6 6.91319 13.2 7.45319Z"
        fill={colorCode}
      />
    </svg>
  );
}
