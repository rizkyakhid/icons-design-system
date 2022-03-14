import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMoneyIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MoneyIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMoneyIconProps) {
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
        d="M15 16.3833H18C18.55 16.3833 19 15.9333 19 15.3833V9.3833C19 8.8333 18.55 8.3833 18 8.3833H15C14.45 8.3833 14 8.8333 14 9.3833V15.3833C14 15.9333 14.45 16.3833 15 16.3833ZM16 10.3833H17V14.3833H16V10.3833ZM9 16.3833H12C12.55 16.3833 13 15.9333 13 15.3833V9.3833C13 8.8333 12.55 8.3833 12 8.3833H9C8.45 8.3833 8 8.8333 8 9.3833V15.3833C8 15.9333 8.45 16.3833 9 16.3833ZM10 10.3833H11V14.3833H10V10.3833ZM6 8.3833C5.45 8.3833 5 8.8333 5 9.3833V15.3833C5 15.9333 5.45 16.3833 6 16.3833C6.55 16.3833 7 15.9333 7 15.3833V9.3833C7 8.8333 6.55 8.3833 6 8.3833ZM2 6.3833V18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V6.3833C22 5.2833 21.1 4.3833 20 4.3833H4C2.9 4.3833 2 5.2833 2 6.3833ZM19 18.3833H5C4.45 18.3833 4 17.9333 4 17.3833V7.3833C4 6.8333 4.45 6.3833 5 6.3833H19C19.55 6.3833 20 6.8333 20 7.3833V17.3833C20 17.9333 19.55 18.3833 19 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
