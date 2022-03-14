import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IWineBarIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WineBarIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IWineBarIconProps) {
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
        d="M7 3.3833C6.45 3.3833 6 3.8333 6 4.3833V9.3833C6 12.3533 8.16 14.8133 11 15.2933V19.3833H9C8.45 19.3833 8 19.8333 8 20.3833C8 20.9333 8.45 21.3833 9 21.3833H15C15.55 21.3833 16 20.9333 16 20.3833C16 19.8333 15.55 19.3833 15 19.3833H13V15.2933C15.84 14.8133 18 12.3533 18 9.3833V4.3833C18 3.8333 17.55 3.3833 17 3.3833H7ZM16 8.3833H8V5.3833H16V8.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
