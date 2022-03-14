import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalPhoneIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalPhoneIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalPhoneIconProps) {
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
        d="M19.23 15.6433L16.69 15.3533C16.08 15.2833 15.48 15.4933 15.05 15.9233L13.21 17.7633C10.38 16.3233 8.06004 14.0133 6.62004 11.1733L8.47004 9.32331C8.90004 8.89331 9.11004 8.29331 9.04004 7.68331L8.75004 5.16331C8.63004 4.15331 7.78004 3.39331 6.76004 3.39331H5.03004C3.90004 3.39331 2.96004 4.33331 3.03004 5.46331C3.56004 14.0033 10.39 20.8233 18.92 21.3533C20.05 21.4233 20.99 20.4833 20.99 19.3533V17.6233C21 16.6133 20.24 15.7633 19.23 15.6433Z"
        fill={colorCode}
      />
    </svg>
  );
}
