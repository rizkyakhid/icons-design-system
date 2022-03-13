import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFlashAutoIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlashAutoIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFlashAutoIconProps) {
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
        d="M3 3.38318V13.3832C3 13.9332 3.45 14.3832 4 14.3832H6V21.5332C6 22.0432 6.67 22.2232 6.93 21.7832L12.12 12.8832C12.51 12.2132 12.03 11.3832 11.26 11.3832H9L12.38 3.79318C12.67 3.12318 12.18 2.38318 11.46 2.38318H4C3.45 2.38318 3 2.83318 3 3.38318ZM18 2.38318C17.4 2.38318 16.87 2.76318 16.66 3.32318L14.22 10.1832C14.02 10.7732 14.45 11.3832 15.07 11.3832C15.45 11.3832 15.79 11.1432 15.91 10.7832L16.4 9.38318H19.6L20.09 10.7832C20.22 11.1432 20.55 11.3832 20.93 11.3832C21.55 11.3832 21.98 10.7732 21.77 10.1932L19.33 3.33318C19.13 2.76318 18.6 2.38318 18 2.38318ZM16.85 8.03318L18 4.38318L19.15 8.03318H16.85Z"
        fill={colorCode}
      />
    </svg>
  );
}
