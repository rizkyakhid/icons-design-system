import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IHdrWeakIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HdrWeakIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IHdrWeakIconProps) {
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
        d="M5 8.38318C2.79 8.38318 1 10.1732 1 12.3832C1 14.5932 2.79 16.3832 5 16.3832C7.21 16.3832 9 14.5932 9 12.3832C9 10.1732 7.21 8.38318 5 8.38318ZM17 6.38318C13.69 6.38318 11 9.07318 11 12.3832C11 15.6932 13.69 18.3832 17 18.3832C20.31 18.3832 23 15.6932 23 12.3832C23 9.07318 20.31 6.38318 17 6.38318ZM17 16.3832C14.79 16.3832 13 14.5932 13 12.3832C13 10.1732 14.79 8.38318 17 8.38318C19.21 8.38318 21 10.1732 21 12.3832C21 14.5932 19.21 16.3832 17 16.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
