import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IHdrStrongIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HdrStrongIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IHdrStrongIconProps) {
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
        d="M17 6.38318C13.69 6.38318 11 9.07318 11 12.3832C11 15.6932 13.69 18.3832 17 18.3832C20.31 18.3832 23 15.6932 23 12.3832C23 9.07318 20.31 6.38318 17 6.38318ZM5 8.38318C2.79 8.38318 1 10.1732 1 12.3832C1 14.5932 2.79 16.3832 5 16.3832C7.21 16.3832 9 14.5932 9 12.3832C9 10.1732 7.21 8.38318 5 8.38318ZM5 14.3832C3.9 14.3832 3 13.4832 3 12.3832C3 11.2832 3.9 10.3832 5 10.3832C6.1 10.3832 7 11.2832 7 12.3832C7 13.4832 6.1 14.3832 5 14.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
