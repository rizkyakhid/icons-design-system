import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IImageIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ImageIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IImageIconProps) {
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
        d="M21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832ZM8.9 14.3632L11 16.8932L14.1 12.9032C14.3 12.6432 14.7 12.6432 14.9 12.9132L18.41 17.5932C18.66 17.9232 18.42 18.3932 18.01 18.3932H6.02C5.6 18.3932 5.37 17.9132 5.63 17.5832L8.12 14.3832C8.31 14.1232 8.69 14.1132 8.9 14.3632Z"
        fill={colorCode}
      />
    </svg>
  );
}
