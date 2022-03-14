import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITripOriginIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TripOriginIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITripOriginIconProps) {
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
        d="M2 12.3833C2 6.8633 6.48 2.3833 12 2.3833C17.52 2.3833 22 6.8633 22 12.3833C22 17.9033 17.52 22.3833 12 22.3833C6.48 22.3833 2 17.9033 2 12.3833ZM12 18.3833C15.31 18.3833 18 15.6933 18 12.3833C18 9.0733 15.31 6.3833 12 6.3833C8.69 6.3833 6 9.0733 6 12.3833C6 15.6933 8.69 18.3833 12 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
