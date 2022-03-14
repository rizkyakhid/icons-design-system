import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalShippingIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalShippingIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalShippingIconProps) {
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
        d="M19.5 8.3833H17V6.3833C17 5.2833 16.1 4.3833 15 4.3833H3C1.9 4.3833 1 5.2833 1 6.3833V15.3833C1 16.4833 1.9 17.3833 3 17.3833C3 19.0433 4.34 20.3833 6 20.3833C7.66 20.3833 9 19.0433 9 17.3833H15C15 19.0433 16.34 20.3833 18 20.3833C19.66 20.3833 21 19.0433 21 17.3833H22C22.55 17.3833 23 16.9333 23 16.3833V13.0533C23 12.6233 22.86 12.2033 22.6 11.8533L20.3 8.7833C20.11 8.5333 19.81 8.3833 19.5 8.3833ZM6 18.3833C5.45 18.3833 5 17.9333 5 17.3833C5 16.8333 5.45 16.3833 6 16.3833C6.55 16.3833 7 16.8333 7 17.3833C7 17.9333 6.55 18.3833 6 18.3833ZM19.5 9.8833L21.46 12.3833H17V9.8833H19.5ZM18 18.3833C17.45 18.3833 17 17.9333 17 17.3833C17 16.8333 17.45 16.3833 18 16.3833C18.55 16.3833 19 16.8333 19 17.3833C19 17.9333 18.55 18.3833 18 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
