import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalDrinkIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalDrinkIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalDrinkIconProps) {
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
        d="M5.23005 2.3833C4.04005 2.3833 3.11005 3.4233 3.24005 4.6033L5.01005 20.6133C5.13005 21.6133 5.97005 22.3833 7.00005 22.3833H17.0001C18.0301 22.3833 18.8701 21.6133 18.9901 20.6133L20.7601 4.6033C20.8901 3.4233 19.9601 2.3833 18.7701 2.3833H5.23005ZM12.0001 19.3833C10.3401 19.3833 9.00005 18.0433 9.00005 16.3833C9.00005 14.8333 10.8101 12.4333 11.6201 11.4433C11.8201 11.1933 12.1901 11.1933 12.3901 11.4433C13.2001 12.4433 15.0101 14.8333 15.0101 16.3833C15.0001 18.0433 13.6601 19.3833 12.0001 19.3833ZM18.3301 8.3833H5.67005L5.35005 5.4933C5.29005 4.9033 5.75005 4.3833 6.35005 4.3833H17.6501C18.2401 4.3833 18.7101 4.9033 18.6401 5.4933L18.3301 8.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
