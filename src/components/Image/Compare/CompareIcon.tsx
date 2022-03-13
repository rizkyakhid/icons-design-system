import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICompareIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CompareIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICompareIconProps) {
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
        d="M10 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H10V22.3832C10 22.9332 10.45 23.3832 11 23.3832C11.55 23.3832 12 22.9332 12 22.3832V2.38318C12 1.83318 11.55 1.38318 11 1.38318C10.45 1.38318 10 1.83318 10 2.38318V3.38318ZM10 18.3832H5L10 12.3832V18.3832ZM19 3.38318H14V5.38318H18C18.55 5.38318 19 5.83318 19 6.38318V18.3832L14 12.3832V21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
