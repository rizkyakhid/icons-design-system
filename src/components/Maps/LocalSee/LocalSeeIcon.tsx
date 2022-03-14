import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalSeeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalSeeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalSeeIconProps) {
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
        d="M12 15.5833C13.7674 15.5833 15.2 14.1506 15.2 12.3833C15.2 10.616 13.7674 9.18329 12 9.18329C10.2327 9.18329 8.80005 10.616 8.80005 12.3833C8.80005 14.1506 10.2327 15.5833 12 15.5833Z"
        fill={colorCode}
      />
      <path
        d="M20 4.3833H16.83L15.59 3.0333C15.22 2.6233 14.68 2.3833 14.12 2.3833H9.88C9.32 2.3833 8.78 2.6233 8.4 3.0333L7.17 4.3833H4C2.9 4.3833 2 5.2833 2 6.3833V18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V6.3833C22 5.2833 21.1 4.3833 20 4.3833ZM12 17.3833C9.24 17.3833 7 15.1433 7 12.3833C7 9.6233 9.24 7.3833 12 7.3833C14.76 7.3833 17 9.6233 17 12.3833C17 15.1433 14.76 17.3833 12 17.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
