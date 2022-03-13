import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBrightness3IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Brightness3Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBrightness3IconProps) {
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
        d="M18.87 10.7532C18.12 5.99318 13.87 2.40318 9.04999 2.38318C8.55999 2.38318 8.07999 2.41318 7.60999 2.48318C7.10999 2.55318 7.00999 3.21318 7.46999 3.44318C10.75 5.07318 13 8.46318 13 12.3832C13 16.3032 10.75 19.6932 7.46999 21.3332C7.01999 21.5632 7.10999 22.2232 7.60999 22.2932C8.07999 22.3532 8.55999 22.3832 9.04999 22.3832C13.87 22.3632 18.12 18.7732 18.87 14.0132C18.96 13.4632 18.98 12.9232 18.98 12.3832C18.98 11.8432 18.96 11.3032 18.87 10.7532Z"
        fill={colorCode}
      />
    </svg>
  );
}
