import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ISatelliteIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SatelliteIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ISatelliteIconProps) {
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
        d="M19 3.3833H5C3.9 3.3833 3 4.2833 3 5.3833V19.3833C3 20.4833 3.9 21.3833 5 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V5.3833C21 4.2833 20.1 3.3833 19 3.3833ZM5 5.3833H8C8 7.0433 6.66 8.3833 5 8.3833V5.3833ZM5 11.2933C5 10.8033 5.36 10.3933 5.85 10.3133C7.93 9.9533 9.57 8.3133 9.93 6.2333C10.01 5.7433 10.42 5.3833 10.91 5.3833C11.52 5.3833 12 5.9133 11.91 6.5133C11.43 9.4733 9.1 11.8133 6.14 12.2933C5.54 12.3933 5 11.9033 5 11.2933ZM5.63 17.5733L8.12 14.3733C8.32 14.1233 8.7 14.1133 8.9 14.3633L11 16.8933L14.1 12.9033C14.3 12.6433 14.7 12.6433 14.9 12.9133L18.41 17.5933C18.66 17.9233 18.42 18.3933 18.01 18.3933H6.02C5.61 18.3833 5.37 17.9033 5.63 17.5733Z"
        fill={colorCode}
      />
    </svg>
  );
}
