import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IEditIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function EditIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IEditIconProps) {
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
        d="M3 17.8432V20.8832C3 21.1632 3.22 21.3832 3.5 21.3832H6.54C6.67 21.3832 6.8 21.3332 6.89 21.2332L17.81 10.3232L14.06 6.57318L3.15 17.4832C3.05 17.5832 3 17.7032 3 17.8432ZM20.71 7.42318C21.1 7.03318 21.1 6.40318 20.71 6.01318L18.37 3.67318C17.98 3.28318 17.35 3.28318 16.96 3.67318L15.13 5.50318L18.88 9.25318L20.71 7.42318V7.42318Z"
        fill={colorCode}
      />
    </svg>
  );
}
