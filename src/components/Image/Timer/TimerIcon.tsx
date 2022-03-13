import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITimerIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TimerIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITimerIconProps) {
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
        d="M14 1.38318H10C9.45001 1.38318 9.00001 1.83318 9.00001 2.38318C9.00001 2.93318 9.45001 3.38318 10 3.38318H14C14.55 3.38318 15 2.93318 15 2.38318C15 1.83318 14.55 1.38318 14 1.38318ZM12 14.3832C12.55 14.3832 13 13.9332 13 13.3832V9.38318C13 8.83318 12.55 8.38318 12 8.38318C11.45 8.38318 11 8.83318 11 9.38318V13.3832C11 13.9332 11.45 14.3832 12 14.3832ZM19.03 7.77318L19.78 7.02318C20.16 6.64318 20.17 6.01318 19.78 5.62318L19.77 5.61318C19.38 5.22318 18.76 5.23318 18.37 5.61318L17.62 6.36318C16.07 5.12318 14.12 4.38318 12 4.38318C7.20001 4.38318 3.12001 8.34318 3.00001 13.1432C2.87001 18.2232 6.94001 22.3832 12 22.3832C16.98 22.3832 21 18.3532 21 13.3832C21 11.2632 20.26 9.31318 19.03 7.77318ZM12 20.3832C8.13001 20.3832 5.00001 17.2532 5.00001 13.3832C5.00001 9.51318 8.13001 6.38318 12 6.38318C15.87 6.38318 19 9.51318 19 13.3832C19 17.2532 15.87 20.3832 12 20.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
