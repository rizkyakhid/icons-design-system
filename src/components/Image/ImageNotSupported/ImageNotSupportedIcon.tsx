import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IImageNotSupportedIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ImageNotSupportedIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IImageNotSupportedIconProps) {
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
        d="M21.19 21.5732L20.41 20.7932L18 18.3832L13.41 13.7932L3.59002 3.97318L2.81002 3.19318C2.42002 2.80318 1.79002 2.80318 1.40002 3.19318C1.00002 3.58318 1.00002 4.21318 1.39002 4.60318L3.00002 6.21318V19.3832C3.00002 20.4832 3.90002 21.3832 5.00002 21.3832H18.17L19.78 22.9932C20.17 23.3832 20.8 23.3832 21.19 22.9932C21.58 22.6032 21.58 21.9632 21.19 21.5732ZM6.02002 18.3832C5.60002 18.3832 5.37002 17.9032 5.63002 17.5732L8.12002 14.3732C8.32002 14.1232 8.70002 14.1132 8.90002 14.3632L11 16.8932L12.17 15.3832L15.17 18.3832H6.02002ZM21 18.5532L5.83002 3.38318H19C20.1 3.38318 21 4.28318 21 5.38318V18.5532Z"
        fill={colorCode}
      />
    </svg>
  );
}
