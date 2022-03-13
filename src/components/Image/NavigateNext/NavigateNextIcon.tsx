import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface INavigateNextIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NavigateNextIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: INavigateNextIconProps) {
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
        d="M9.30999 7.09318C8.91999 7.48318 8.91999 8.11318 9.30999 8.50318L13.19 12.3832L9.30999 16.2632C8.91999 16.6532 8.91999 17.2832 9.30999 17.6732C9.69999 18.0632 10.33 18.0632 10.72 17.6732L15.31 13.0832C15.7 12.6932 15.7 12.0632 15.31 11.6732L10.72 7.08318C10.34 6.70318 9.69999 6.70318 9.30999 7.09318Z"
        fill={colorCode}
      />
    </svg>
  );
}
