import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IElectricRickshawIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ElectricRickshawIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IElectricRickshawIconProps) {
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
        d="M21 11.5633V10.1033C21 9.6333 20.84 9.1833 20.54 8.8233L16.6 4.1033C16.22 3.6433 15.66 3.3833 15.06 3.3833H3C1.9 3.3833 1 4.2833 1 5.3833V13.3833C1 14.4833 1.9 15.3833 3 15.3833H3.18C3.6 16.5433 4.7 17.3833 6 17.3833C7.3 17.3833 8.4 16.5433 8.82 15.3833H17.19C17.6 16.5433 18.7 17.3833 20.01 17.3833C21.67 17.3833 23.01 16.0433 23.01 14.3833C23 13.0833 22.16 11.9833 21 11.5633ZM18.4 9.3833H16V6.5033L18.4 9.3833ZM4 5.3833H7V9.3833H3V6.3833C3 5.8333 3.45 5.3833 4 5.3833ZM6 15.3833C5.45 15.3833 5 14.9333 5 14.3833C5 13.8333 5.45 13.3833 6 13.3833C6.55 13.3833 7 13.8333 7 14.3833C7 14.9333 6.55 15.3833 6 15.3833ZM9 13.3833V11.3833H11C11.55 11.3833 12 10.9333 12 10.3833C12 9.8333 11.55 9.3833 11 9.3833H9V5.3833H13C13.55 5.3833 14 5.8333 14 6.3833V13.3833H9ZM20 15.3833C19.45 15.3833 19 14.9333 19 14.3833C19 13.8333 19.45 13.3833 20 13.3833C20.55 13.3833 21 13.8333 21 14.3833C21 14.9333 20.55 15.3833 20 15.3833Z"
        fill={colorCode}
      />
      <path
        d="M7 20.3833H11V18.3833L17 21.3833H13V23.3833L7 20.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
