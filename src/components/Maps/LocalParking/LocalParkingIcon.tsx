import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalParkingIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalParkingIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalParkingIconProps) {
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
        d="M12.79 3.3833H8C6.9 3.3833 6 4.2833 6 5.3833V19.3833C6 20.4833 6.9 21.3833 8 21.3833C9.1 21.3833 10 20.4833 10 19.3833V15.3833H13C16.57 15.3833 19.42 12.2533 18.95 8.5933C18.56 5.5733 15.84 3.3833 12.79 3.3833ZM13.2 11.3833H10V7.3833H13.2C14.3 7.3833 15.2 8.2833 15.2 9.3833C15.2 10.4833 14.3 11.3833 13.2 11.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
