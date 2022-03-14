import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface INavigationIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NavigationIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: INavigationIconProps) {
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
        d="M12.93 4.64331L19.08 19.6333C19.42 20.4633 18.57 21.2933 17.75 20.9233L12.41 18.5633C12.15 18.4533 11.86 18.4533 11.6 18.5633L6.26002 20.9233C5.44002 21.2833 4.59002 20.4633 4.93002 19.6333L11.08 4.64331C11.41 3.81331 12.59 3.81331 12.93 4.64331Z"
        fill={colorCode}
      />
    </svg>
  );
}
