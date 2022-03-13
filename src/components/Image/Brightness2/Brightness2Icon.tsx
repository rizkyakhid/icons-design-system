import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBrightness2IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Brightness2Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBrightness2IconProps) {
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
        d="M12.43 2.68319C10.05 2.09319 7.75001 2.41319 5.80001 3.32319C5.45001 3.48319 5.39001 3.96319 5.70001 4.18319C8.30001 5.98319 10 8.98319 10 12.3832C10 15.7832 8.30001 18.7832 5.70001 20.5832C5.38001 20.8032 5.44001 21.2832 5.79001 21.4432C7.07001 22.0432 8.50001 22.3832 10 22.3832C16.05 22.3832 20.85 17.0032 19.87 10.7832C19.26 6.86319 16.28 3.62319 12.43 2.68319Z"
        fill={colorCode}
      />
    </svg>
  );
}
