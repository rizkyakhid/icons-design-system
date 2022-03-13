import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFilterBAndWIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FilterBAndWIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFilterBAndWIconProps) {
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
        d="M19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM19 19.3832L12 11.3832V19.3832H5L12 11.3832V5.38318H18C18.55 5.38318 19 5.83318 19 6.38318V19.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
