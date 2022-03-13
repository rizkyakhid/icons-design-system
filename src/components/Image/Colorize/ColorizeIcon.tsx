import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IColorizeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ColorizeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IColorizeIconProps) {
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
        d="M20.71 6.01318L18.37 3.67318C17.98 3.28318 17.35 3.28318 16.96 3.67318L13.84 6.79318L12.61 5.58318C12.22 5.19318 11.59 5.20318 11.2 5.58318C10.81 5.97318 10.81 6.60318 11.2 6.99318L11.92 7.71318L3.15 16.4832C3.05 16.5832 3 16.7032 3 16.8432V20.8832C3 21.1632 3.22 21.3832 3.5 21.3832H7.54C7.67 21.3832 7.8 21.3332 7.89 21.2332L16.66 12.4632L17.38 13.1832C17.77 13.5732 18.4 13.5732 18.79 13.1832C19.18 12.7932 19.18 12.1632 18.79 11.7732L17.57 10.5532L20.69 7.43318C21.1 7.03318 21.1 6.40318 20.71 6.01318V6.01318ZM6.92 19.3832L5 17.4632L13.06 9.40318L14.98 11.3232L6.92 19.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
