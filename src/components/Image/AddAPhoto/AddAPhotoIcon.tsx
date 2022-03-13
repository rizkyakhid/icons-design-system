import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAddAPhotoIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddAPhotoIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAddAPhotoIconProps) {
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
        d="M3 8.38318C3 8.93318 3.45 9.38318 4 9.38318C4.55 9.38318 5 8.93318 5 8.38318V6.38318H7C7.55 6.38318 8 5.93318 8 5.38318C8 4.83318 7.55 4.38318 7 4.38318H5V2.38318C5 1.83318 4.55 1.38318 4 1.38318C3.45 1.38318 3 1.83318 3 2.38318V4.38318H1C0.45 4.38318 0 4.83318 0 5.38318C0 5.93318 0.45 6.38318 1 6.38318H3V8.38318Z"
        fill={colorCode}
      />
      <path
        d="M13 17.3832C14.6569 17.3832 16 16.04 16 14.3832C16 12.7263 14.6569 11.3832 13 11.3832C11.3431 11.3832 10 12.7263 10 14.3832C10 16.04 11.3431 17.3832 13 17.3832Z"
        fill={colorCode}
      />
      <path
        d="M21 6.38318H17.83L16.59 5.03318C16.22 4.62318 15.68 4.38318 15.12 4.38318H8.72C8.89 4.68318 9 5.01318 9 5.38318C9 6.48318 8.1 7.38318 7 7.38318H6V8.38318C6 9.48318 5.1 10.3832 4 10.3832C3.63 10.3832 3.3 10.2732 3 10.1032V20.3832C3 21.4832 3.9 22.3832 5 22.3832H21C22.1 22.3832 23 21.4832 23 20.3832V8.38318C23 7.28318 22.1 6.38318 21 6.38318ZM13 19.3832C10.24 19.3832 8 17.1432 8 14.3832C8 11.6232 10.24 9.38318 13 9.38318C15.76 9.38318 18 11.6232 18 14.3832C18 17.1432 15.76 19.3832 13 19.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
