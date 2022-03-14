import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IElectricalServicesIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ElectricalServicesIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IElectricalServicesIconProps) {
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
        d="M21 14.3833C21 13.8333 20.55 13.3833 20 13.3833H18V15.3833H20C20.55 15.3833 21 14.9333 21 14.3833Z"
        fill={colorCode}
      />
      <path
        d="M20 17.3833H18V19.3833H20C20.55 19.3833 21 18.9333 21 18.3833C21 17.8333 20.55 17.3833 20 17.3833Z"
        fill={colorCode}
      />
      <path
        d="M16 12.3833H14C12.9 12.3833 12 13.2833 12 14.3833H11C10.45 14.3833 10 14.8333 10 15.3833V17.3833C10 17.9333 10.45 18.3833 11 18.3833H12C12 19.4833 12.9 20.3833 14 20.3833H16C16.55 20.3833 17 19.9333 17 19.3833V13.3833C17 12.8333 16.55 12.3833 16 12.3833Z"
        fill={colorCode}
      />
      <path
        d="M5 13.3833C5 12.2833 5.9 11.3833 7 11.3833H8.5C10.43 11.3833 12 9.8133 12 7.8833C12 5.9533 10.43 4.3833 8.5 4.3833H5C4.45 4.3833 4 4.8333 4 5.3833C4 5.9333 4.45 6.3833 5 6.3833H8.5C9.33 6.3833 10 7.0533 10 7.8833C10 8.7133 9.33 9.3833 8.5 9.3833H7C4.79 9.3833 3 11.1733 3 13.3833C3 15.5933 4.79 17.3833 7 17.3833H9V15.3833H7C5.9 15.3833 5 14.4833 5 13.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
