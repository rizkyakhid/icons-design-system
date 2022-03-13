import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFlashOnIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlashOnIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFlashOnIconProps) {
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
        d="M7 3.38318V12.3832C7 12.9332 7.45 13.3832 8 13.3832H10V20.5332C10 21.0432 10.67 21.2232 10.93 20.7832L16.12 11.8832C16.51 11.2132 16.03 10.3832 15.26 10.3832H13L15.49 3.73318C15.74 3.08318 15.26 2.38318 14.56 2.38318H8C7.45 2.38318 7 2.83318 7 3.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
