import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalMoviesIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalMoviesIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalMoviesIconProps) {
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
        d="M18 4.3833V5.3833H16V4.3833C16 3.8333 15.55 3.3833 15 3.3833H9C8.45 3.3833 8 3.8333 8 4.3833V5.3833H6V4.3833C6 3.8333 5.55 3.3833 5 3.3833C4.45 3.3833 4 3.8333 4 4.3833V20.3833C4 20.9333 4.45 21.3833 5 21.3833C5.55 21.3833 6 20.9333 6 20.3833V19.3833H8V20.3833C8 20.9333 8.45 21.3833 9 21.3833H15C15.55 21.3833 16 20.9333 16 20.3833V19.3833H18V20.3833C18 20.9333 18.45 21.3833 19 21.3833C19.55 21.3833 20 20.9333 20 20.3833V4.3833C20 3.8333 19.55 3.3833 19 3.3833C18.45 3.3833 18 3.8333 18 4.3833ZM8 17.3833H6V15.3833H8V17.3833ZM8 13.3833H6V11.3833H8V13.3833ZM8 9.3833H6V7.3833H8V9.3833ZM18 17.3833H16V15.3833H18V17.3833ZM18 13.3833H16V11.3833H18V13.3833ZM18 9.3833H16V7.3833H18V9.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
