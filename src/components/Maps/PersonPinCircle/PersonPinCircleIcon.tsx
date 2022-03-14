import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPersonPinCircleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PersonPinCircleIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPersonPinCircleIconProps) {
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
        d="M12 11.3833C10.67 11.3833 8 12.0533 8 13.3833V13.5433C8.97 14.6633 10.4 15.3833 12 15.3833C13.6 15.3833 15.03 14.6633 16 13.5433V13.3833C16 12.0533 13.33 11.3833 12 11.3833ZM12 10.3833C13.1 10.3833 14 9.4833 14 8.3833C14 7.2833 13.1 6.3833 12 6.3833C10.9 6.3833 10 7.2833 10 8.3833C10 9.4833 10.9 10.3833 12 10.3833ZM12 2.3833C16.2 2.3833 20 5.6033 20 10.5833C20 13.7633 17.55 17.5033 12.66 21.8133C12.28 22.1433 11.71 22.1433 11.33 21.8133C6.45 17.5033 4 13.7633 4 10.5833C4 5.6033 7.8 2.3833 12 2.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
