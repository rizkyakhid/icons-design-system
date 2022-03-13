import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILooksOneIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LooksOneIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILooksOneIconProps) {
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
        d="M19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM13 17.3832C12.45 17.3832 12 16.9332 12 16.3832V9.38318H11C10.45 9.38318 10 8.93318 10 8.38318C10 7.83318 10.45 7.38318 11 7.38318H13C13.55 7.38318 14 7.83318 14 8.38318V16.3832C14 16.9332 13.55 17.3832 13 17.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
