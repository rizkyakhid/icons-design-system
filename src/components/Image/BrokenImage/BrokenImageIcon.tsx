import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBrokenImageIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BrokenImageIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBrokenImageIconProps) {
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
        d="M21 5.38318V11.9732L18.71 9.67318C18.32 9.28318 17.68 9.28318 17.29 9.67318L14 12.9732L10.71 9.68318C10.32 9.29318 9.69 9.29318 9.3 9.68318L6 12.9732L3 9.96318V5.38318C3 4.28318 3.9 3.38318 5 3.38318H19C20.1 3.38318 21 4.28318 21 5.38318ZM18 11.8032L21 14.8132V19.3832C21 20.4832 20.1 21.3832 19 21.3832H5C3.9 21.3832 3 20.4832 3 19.3832V12.8032L5.29 15.0932C5.68 15.4832 6.31 15.4832 6.7 15.0932L10 11.7932L13.29 15.0832C13.68 15.4732 14.31 15.4732 14.7 15.0832L18 11.8032Z"
        fill={colorCode}
      />
    </svg>
  );
}
