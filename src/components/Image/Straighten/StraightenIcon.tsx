import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IStraightenIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StraightenIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IStraightenIconProps) {
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
        d="M21 6.38318H3C1.9 6.38318 1 7.28318 1 8.38318V16.3832C1 17.4832 1.9 18.3832 3 18.3832H21C22.1 18.3832 23 17.4832 23 16.3832V8.38318C23 7.28318 22.1 6.38318 21 6.38318ZM20 16.3832H4C3.45 16.3832 3 15.9332 3 15.3832V9.38318C3 8.83318 3.45 8.38318 4 8.38318H5V11.3832C5 11.9332 5.45 12.3832 6 12.3832C6.55 12.3832 7 11.9332 7 11.3832V8.38318H9V11.3832C9 11.9332 9.45 12.3832 10 12.3832C10.55 12.3832 11 11.9332 11 11.3832V8.38318H13V11.3832C13 11.9332 13.45 12.3832 14 12.3832C14.55 12.3832 15 11.9332 15 11.3832V8.38318H17V11.3832C17 11.9332 17.45 12.3832 18 12.3832C18.55 12.3832 19 11.9332 19 11.3832V8.38318H20C20.55 8.38318 21 8.83318 21 9.38318V15.3832C21 15.9332 20.55 16.3832 20 16.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
