import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFlipCameraIosIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlipCameraIosIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFlipCameraIosIconProps) {
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
        d="M20 5.38318H16.83L15.59 4.03318C15.22 3.62318 14.68 3.38318 14.12 3.38318H9.88C9.32 3.38318 8.78 3.62318 8.4 4.03318L7.17 5.38318H4C2.9 5.38318 2 6.28318 2 7.38318V19.3832C2 20.4832 2.9 21.3832 4 21.3832H20C21.1 21.3832 22 20.4832 22 19.3832V7.38318C22 6.28318 21.1 5.38318 20 5.38318ZM13.67 18.0832C13.15 18.2732 12.59 18.3832 12 18.3832C9.24 18.3832 7 16.1432 7 13.3832H5L7.5 10.8832L10 13.3832H8C8 15.5932 9.79 17.3832 12 17.3832C12.46 17.3832 12.91 17.3032 13.32 17.1532C13.51 17.0832 13.71 17.1232 13.85 17.2632C14.11 17.5232 14.01 17.9532 13.67 18.0832ZM16.5 15.8832L14 13.3832H16C16 11.1732 14.21 9.38318 12 9.38318C11.54 9.38318 11.09 9.46318 10.68 9.61318C10.49 9.68318 10.29 9.64318 10.15 9.50318C9.89 9.24318 9.99 8.81318 10.33 8.68318C10.85 8.49318 11.41 8.38318 12 8.38318C14.76 8.38318 17 10.6232 17 13.3832H19L16.5 15.8832Z"
        fill={colorCode}
      />
    </svg>
  );
}
