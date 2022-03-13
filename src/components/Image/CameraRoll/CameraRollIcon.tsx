import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICameraRollIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CameraRollIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICameraRollIconProps) {
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
        d="M14 5.38318C14 4.28318 13.1 3.38318 12 3.38318H11V2.38318C11 1.83318 10.55 1.38318 10 1.38318H6C5.45 1.38318 5 1.83318 5 2.38318V3.38318H4C2.9 3.38318 2 4.28318 2 5.38318V20.3832C2 21.4832 2.9 22.3832 4 22.3832H12C13.1 22.3832 14 21.4832 14 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832V7.38318C22 6.28318 21.1 5.38318 20 5.38318H14ZM12 18.3832H10V16.3832H12V18.3832ZM12 9.38318H10V7.38318H12V9.38318ZM16 18.3832H14V16.3832H16V18.3832ZM16 9.38318H14V7.38318H16V9.38318ZM20 18.3832H18V16.3832H20V18.3832ZM20 9.38318H18V7.38318H20V9.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
