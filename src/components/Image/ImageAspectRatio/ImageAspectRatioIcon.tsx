import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IImageAspectRatioIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ImageAspectRatioIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IImageAspectRatioIconProps) {
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
        d="M16 10.3832H14V12.3832H16V10.3832ZM16 14.3832H14V16.3832H16V14.3832ZM8 10.3832H6V12.3832H8V10.3832ZM12 10.3832H10V12.3832H12V10.3832ZM20 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318V18.3832C2 19.4832 2.9 20.3832 4 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832V6.38318C22 5.28318 21.1 4.38318 20 4.38318ZM19 18.3832H5C4.45 18.3832 4 17.9332 4 17.3832V7.38318C4 6.83318 4.45 6.38318 5 6.38318H19C19.55 6.38318 20 6.83318 20 7.38318V17.3832C20 17.9332 19.55 18.3832 19 18.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
