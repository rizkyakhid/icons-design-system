import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICameraAltIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CameraAltIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICameraAltIconProps) {
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
        d="M12 15.3832C13.6569 15.3832 15 14.04 15 12.3832C15 10.7263 13.6569 9.38318 12 9.38318C10.3431 9.38318 9 10.7263 9 12.3832C9 14.04 10.3431 15.3832 12 15.3832Z"
        fill={colorCode}
      />
      <path
        d="M20 4.38318H16.83L15.59 3.03318C15.22 2.62318 14.68 2.38318 14.12 2.38318H9.88C9.32 2.38318 8.78 2.62318 8.4 3.03318L7.17 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318V18.3832C2 19.4832 2.9 20.3832 4 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832V6.38318C22 5.28318 21.1 4.38318 20 4.38318ZM12 17.3832C9.24 17.3832 7 15.1432 7 12.3832C7 9.62318 9.24 7.38318 12 7.38318C14.76 7.38318 17 9.62318 17 12.3832C17 15.1432 14.76 17.3832 12 17.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
