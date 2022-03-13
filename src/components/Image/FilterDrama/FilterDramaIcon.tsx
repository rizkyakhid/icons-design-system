import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFilterDramaIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FilterDramaIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFilterDramaIconProps) {
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
        d="M19.35 10.4232C18.67 6.97318 15.64 4.38318 12 4.38318C9.11 4.38318 6.61 6.02318 5.36 8.42318C2.35 8.74318 0 11.2832 0 14.3832C0 17.6932 2.69 20.3832 6 20.3832H19C21.76 20.3832 24 18.1432 24 15.3832C24 12.7432 21.95 10.6032 19.35 10.4232ZM19 18.3832H6.17C4.08 18.3832 2.22 16.8532 2.02 14.7732C1.79 12.3932 3.66 10.3832 6 10.3832C7.92 10.3832 9.53 11.7432 9.91 13.5532C10.01 14.0332 10.41 14.3832 10.89 14.3832C11.5 14.3832 12 13.8332 11.88 13.2332C11.45 10.9932 9.77 9.20318 7.59 8.60318C8.69 7.14318 10.48 6.23318 12.48 6.40318C15.36 6.65318 17.49 9.22318 17.49 12.1132V12.3832H18.86C20.31 12.3832 21.65 13.3532 21.93 14.7832C22.32 16.6932 20.85 18.3832 19 18.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
