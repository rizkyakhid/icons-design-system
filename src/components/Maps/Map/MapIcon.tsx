import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMapIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MapIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMapIconProps) {
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
        d="M14.65 5.36329L9.65 3.61329C9.23 3.46329 8.77 3.46329 8.35 3.60329L4.36 4.94329C3.55 5.22329 3 5.98329 3 6.84329V18.6933C3 20.1033 4.41 21.0633 5.72 20.5533L8.65 19.4133C8.87 19.3233 9.12 19.3233 9.34 19.4033L14.34 21.1533C14.76 21.3033 15.22 21.3033 15.64 21.1633L19.63 19.8233C20.44 19.5533 20.99 18.7833 20.99 17.9233V6.07329C20.99 4.66329 19.58 3.70329 18.27 4.21329L15.34 5.35329C15.12 5.43329 14.88 5.44329 14.65 5.36329ZM15 19.2733L9 17.1633V5.49329L15 7.60329V19.2733Z"
        fill={colorCode}
      />
    </svg>
  );
}
