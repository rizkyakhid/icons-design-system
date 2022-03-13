import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface INavigateBeforeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NavigateBeforeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: INavigateBeforeIconProps) {
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
        d="M14.91 7.09318C14.52 6.70318 13.89 6.70318 13.5 7.09318L8.90999 11.6832C8.51999 12.0732 8.51999 12.7032 8.90999 13.0932L13.5 17.6832C13.89 18.0732 14.52 18.0732 14.91 17.6832C15.3 17.2932 15.3 16.6632 14.91 16.2732L11.03 12.3832L14.91 8.50318C15.29 8.11318 15.29 7.47318 14.91 7.09318Z"
        fill={colorCode}
      />
    </svg>
  );
}
