import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IIcon360Props {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Icon360({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IIcon360Props) {
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
        d="M12 7.3833C6.48 7.3833 2 9.6233 2 12.3833C2 14.6233 4.94 16.5133 9 17.1533V19.1733C9 19.6233 9.54 19.8433 9.85 19.5233L12.64 16.7333C12.84 16.5333 12.84 16.2233 12.64 16.0233L9.85 13.2333C9.54 12.9233 9 13.1433 9 13.5933V15.1133C5.85 14.5533 4 13.2133 4 12.3833C4 11.3233 7.04 9.3833 12 9.3833C16.96 9.3833 20 11.3233 20 12.3833C20 13.0433 18.8 14.0633 16.68 14.7233C16.27 14.8533 16 15.2333 16 15.6633C16 16.3333 16.65 16.8233 17.28 16.6233C20.11 15.7433 22 14.1733 22 12.3833C22 9.6233 17.52 7.3833 12 7.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
