import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICropFreeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CropFreeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICropFreeIconProps) {
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
        d="M3 5.38318V8.38318C3 8.93318 3.45 9.38318 4 9.38318C4.55 9.38318 5 8.93318 5 8.38318V6.38318C5 5.83318 5.45 5.38318 6 5.38318H8C8.55 5.38318 9 4.93318 9 4.38318C9 3.83318 8.55 3.38318 8 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318ZM4 15.3832C3.45 15.3832 3 15.8332 3 16.3832V19.3832C3 20.4832 3.9 21.3832 5 21.3832H8C8.55 21.3832 9 20.9332 9 20.3832C9 19.8332 8.55 19.3832 8 19.3832H6C5.45 19.3832 5 18.9332 5 18.3832V16.3832C5 15.8332 4.55 15.3832 4 15.3832ZM19 18.3832C19 18.9332 18.55 19.3832 18 19.3832H16C15.45 19.3832 15 19.8332 15 20.3832C15 20.9332 15.45 21.3832 16 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V16.3832C21 15.8332 20.55 15.3832 20 15.3832C19.45 15.3832 19 15.8332 19 16.3832V18.3832ZM19 3.38318H16C15.45 3.38318 15 3.83318 15 4.38318C15 4.93318 15.45 5.38318 16 5.38318H18C18.55 5.38318 19 5.83318 19 6.38318V8.38318C19 8.93318 19.45 9.38318 20 9.38318C20.55 9.38318 21 8.93318 21 8.38318V5.38318C21 4.28318 20.1 3.38318 19 3.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
