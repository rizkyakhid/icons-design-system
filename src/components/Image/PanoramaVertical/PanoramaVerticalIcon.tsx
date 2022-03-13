import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPanoramaVerticalIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PanoramaVerticalIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPanoramaVerticalIconProps) {
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
        d="M19.94 21.5032C18.84 18.5632 18.3 15.4732 18.3 12.3832C18.3 9.29318 18.85 6.20318 19.94 3.26318C19.98 3.15318 20 3.04318 20 2.95318C20 2.61318 19.77 2.38318 19.37 2.38318H4.63C4.23 2.38318 4 2.61318 4 2.95318C4 3.05318 4.02 3.15318 4.06 3.26318C5.16 6.20318 5.71 9.29318 5.71 12.3832C5.71 15.4732 5.16 18.5632 4.07 21.5032C4.02 21.6132 4 21.7232 4 21.8132C4 22.1432 4.23 22.3832 4.63 22.3832H19.38C19.77 22.3832 20.01 22.1432 20.01 21.8132C20 21.7132 19.98 21.6132 19.94 21.5032ZM6.54 20.3832C7.31 17.7832 7.7 15.1032 7.7 12.3832C7.7 9.66318 7.31 6.98318 6.54 4.38318H17.45C16.68 6.98318 16.29 9.66318 16.29 12.3832C16.29 15.1032 16.68 17.7832 17.45 20.3832H6.54Z"
        fill={colorCode}
      />
    </svg>
  );
}
