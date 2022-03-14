import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IHomeRepairServiceIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HomeRepairServiceIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IHomeRepairServiceIconProps) {
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
        d="M17 16.3833C16.45 16.3833 16 15.9333 16 15.3833H8C8 15.9333 7.55 16.3833 7 16.3833C6.45 16.3833 6 15.9333 6 15.3833H2V18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V15.3833H18C18 15.9333 17.55 16.3833 17 16.3833Z"
        fill={colorCode}
      />
      <path
        d="M20 8.3833H17V6.3833C17 5.2833 16.1 4.3833 15 4.3833H9C7.9 4.3833 7 5.2833 7 6.3833V8.3833H4C2.9 8.3833 2 9.2833 2 10.3833V14.3833H6V13.3833C6 12.8333 6.45 12.3833 7 12.3833C7.55 12.3833 8 12.8333 8 13.3833V14.3833H16V13.3833C16 12.8333 16.45 12.3833 17 12.3833C17.55 12.3833 18 12.8333 18 13.3833V14.3833H22V10.3833C22 9.2833 21.1 8.3833 20 8.3833ZM15 8.3833H9V6.3833H15V8.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
