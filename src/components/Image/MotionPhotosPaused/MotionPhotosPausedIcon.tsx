import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMotionPhotosPausedIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MotionPhotosPausedIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMotionPhotosPausedIconProps) {
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
        d="M21.96 11.4332C22.54 17.6932 17.32 22.9132 11.06 22.3332C6.63 21.9232 2.94 18.4832 2.16 14.1032C1.9 12.6832 1.97 11.3232 2.28 10.0632C2.42 9.48318 3.04 9.16318 3.59 9.36318C4.06 9.53318 4.34 10.0332 4.22 10.5232C4.02 11.3432 3.95 12.2232 4.03 13.1332C4.4 17.1732 7.92 20.3832 11.98 20.3932C16.77 20.4032 20.59 16.1832 19.92 11.2732C19.41 7.57318 16.26 4.65318 12.53 4.41318C11.7 4.35318 10.9 4.43318 10.15 4.61318C9.66 4.72318 9.16 4.45318 8.99 3.97318C8.79 3.41318 9.11 2.80318 9.68 2.66318C11.47 2.23318 13.43 2.25318 15.46 3.03318C19.02 4.38318 21.61 7.65318 21.96 11.4332ZM5.5 4.38318C4.67 4.38318 4 5.05318 4 5.88318C4 6.71318 4.67 7.38318 5.5 7.38318C6.33 7.38318 7 6.71318 7 5.88318C7 5.05318 6.33 4.38318 5.5 4.38318ZM11 15.3832V9.38318C11 8.83318 10.55 8.38318 10 8.38318C9.45 8.38318 9 8.83318 9 9.38318V15.3832C9 15.9332 9.45 16.3832 10 16.3832C10.55 16.3832 11 15.9332 11 15.3832ZM15 15.3832V9.38318C15 8.83318 14.55 8.38318 14 8.38318C13.45 8.38318 13 8.83318 13 9.38318V15.3832C13 15.9332 13.45 16.3832 14 16.3832C14.55 16.3832 15 15.9332 15 15.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
