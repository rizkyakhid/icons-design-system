import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IViewComfyIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ViewComfyIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IViewComfyIconProps) {
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
        d="M3 9.38318H7V5.38318H5C3.9 5.38318 3 6.28318 3 7.38318V9.38318ZM3 14.3832H7V10.3832H3V14.3832ZM8 14.3832H12V10.3832H8V14.3832ZM13 14.3832H17V10.3832H13V14.3832ZM8 9.38318H12V5.38318H8V9.38318ZM13 5.38318V9.38318H17V5.38318H13ZM18 14.3832H22V10.3832H18V14.3832ZM5 19.3832H7V15.3832H3V17.3832C3 18.4832 3.9 19.3832 5 19.3832ZM8 19.3832H12V15.3832H8V19.3832ZM13 19.3832H17V15.3832H13V19.3832ZM18 19.3832H20C21.1 19.3832 22 18.4832 22 17.3832V15.3832H18V19.3832ZM18 5.38318V9.38318H22V7.38318C22 6.28318 21.1 5.38318 20 5.38318H18Z"
        fill={colorCode}
      />
    </svg>
  );
}
