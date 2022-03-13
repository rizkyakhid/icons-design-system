import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITransformIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TransformIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITransformIconProps) {
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
        d="M21 16.3832H9C8.45 16.3832 8 15.9332 8 15.3832V4.38318H8.79C9.24 4.38318 9.46 3.84318 9.14 3.53318L7.35 1.73318C7.15 1.53318 6.84 1.53318 6.64 1.73318L4.85 3.53318C4.54 3.84318 4.76 4.38318 5.21 4.38318H6V6.38318H3C2.45 6.38318 2 6.83318 2 7.38318C2 7.93318 2.45 8.38318 3 8.38318H6V16.3832C6 17.4832 6.9 18.3832 8 18.3832H16V20.3832H15.21C14.76 20.3832 14.54 20.9232 14.86 21.2332L16.65 23.0232C16.85 23.2232 17.16 23.2232 17.36 23.0232L19.15 21.2332C19.47 20.9232 19.24 20.3832 18.8 20.3832H18V18.3832H21C21.55 18.3832 22 17.9332 22 17.3832C22 16.8332 21.55 16.3832 21 16.3832ZM16 14.3832H18V8.38318C18 7.28318 17.1 6.38318 16 6.38318H10V8.38318H15C15.55 8.38318 16 8.83318 16 9.38318V14.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
