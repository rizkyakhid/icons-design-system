import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IDetailsIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DetailsIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IDetailsIconProps) {
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
        d="M11.13 4.95318L2.83 19.8932C2.46 20.5632 2.94 21.3832 3.7 21.3832H20.3C21.06 21.3832 21.54 20.5632 21.17 19.8932L12.87 4.95318C12.49 4.27318 11.51 4.27318 11.13 4.95318ZM13 9.30318L18.6 19.3832H13V9.30318ZM11 9.30318V19.3832H5.4L11 9.30318Z"
        fill={colorCode}
      />
    </svg>
  );
}
