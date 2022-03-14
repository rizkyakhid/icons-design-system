import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMedicalServicesIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MedicalServicesIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMedicalServicesIconProps) {
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
        d="M20 6.3833H16V4.3833C16 3.2833 15.1 2.3833 14 2.3833H10C8.9 2.3833 8 3.2833 8 4.3833V6.3833H4C2.9 6.3833 2 7.2833 2 8.3833V20.3833C2 21.4833 2.9 22.3833 4 22.3833H20C21.1 22.3833 22 21.4833 22 20.3833V8.3833C22 7.2833 21.1 6.3833 20 6.3833ZM10 4.3833H14V6.3833H10V4.3833ZM15 15.3833H13V17.3833C13 17.9333 12.55 18.3833 12 18.3833C11.45 18.3833 11 17.9333 11 17.3833V15.3833H9C8.45 15.3833 8 14.9333 8 14.3833C8 13.8333 8.45 13.3833 9 13.3833H11V11.3833C11 10.8333 11.45 10.3833 12 10.3833C12.55 10.3833 13 10.8333 13 11.3833V13.3833H15C15.55 13.3833 16 13.8333 16 14.3833C16 14.9333 15.55 15.3833 15 15.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
