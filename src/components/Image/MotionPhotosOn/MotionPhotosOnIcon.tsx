import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMotionPhotosOnIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MotionPhotosOnIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMotionPhotosOnIconProps) {
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
        d="M10 15.8832V8.88318C10 8.47318 10.47 8.23318 10.8 8.48318L15.47 11.9832C15.74 12.1832 15.74 12.5832 15.47 12.7832L10.8 16.2832C10.47 16.5332 10 16.2932 10 15.8832ZM21.96 11.4332C22.54 17.6932 17.32 22.9132 11.06 22.3332C6.63 21.9232 2.94 18.4832 2.16 14.1032C1.9 12.6832 1.97 11.3232 2.28 10.0632C2.42 9.48318 3.04 9.16318 3.59 9.36318C4.06 9.53318 4.34 10.0332 4.22 10.5232C4.02 11.3432 3.95 12.2232 4.03 13.1332C4.4 17.1732 7.92 20.3832 11.98 20.3932C16.77 20.4032 20.59 16.1832 19.92 11.2732C19.41 7.57318 16.26 4.65318 12.53 4.41318C11.7 4.35318 10.9 4.43318 10.15 4.61318C9.66 4.72318 9.16 4.45318 8.99 3.97318C8.79 3.41318 9.11 2.80318 9.68 2.66318C11.47 2.23318 13.43 2.25318 15.46 3.03318C19.02 4.38318 21.61 7.65318 21.96 11.4332ZM5.5 4.38318C4.67 4.38318 4 5.05318 4 5.88318C4 6.71318 4.67 7.38318 5.5 7.38318C6.33 7.38318 7 6.71318 7 5.88318C7 5.05318 6.33 4.38318 5.5 4.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
