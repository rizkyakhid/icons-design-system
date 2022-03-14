import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalDiningIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalDiningIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalDiningIconProps) {
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
        d="M8.1 13.7233L10.93 10.8933L4.74 4.71329C4.26 4.23329 3.43 4.36329 3.13 4.98329C2.42 6.47329 2.68 8.30329 3.91 9.54329L8.1 13.7233ZM14.88 11.9133C16.41 12.6233 18.56 12.1233 20.15 10.5333C22.06 8.62329 22.43 5.88329 20.96 4.41329C19.5 2.95329 16.76 3.31329 14.84 5.22329C13.25 6.81329 12.75 8.96329 13.46 10.4933L4.41 19.5433C4.02 19.9333 4.02 20.5633 4.41 20.9533C4.8 21.3433 5.43 21.3433 5.82 20.9533L12 14.7933L18.18 20.9733C18.57 21.3633 19.2 21.3633 19.59 20.9733C19.98 20.5833 19.98 19.9533 19.59 19.5633L13.41 13.3833L14.88 11.9133Z"
        fill={colorCode}
      />
    </svg>
  );
}
