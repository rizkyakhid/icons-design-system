import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IZoomOutMapIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ZoomOutMapIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IZoomOutMapIconProps) {
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
        d="M15.85 4.2333L17.3 5.6833L15.12 7.8433C14.73 8.2333 14.73 8.8733 15.12 9.2633C15.51 9.6533 16.15 9.6533 16.54 9.2633L18.7 7.0833L20.15 8.5333C20.46 8.8433 21 8.6233 21 8.1733V3.8833C21 3.6033 20.78 3.3833 20.5 3.3833H16.21C15.76 3.3833 15.54 3.9233 15.85 4.2333ZM3.85 8.5333L5.3 7.0833L7.46 9.2633C7.85 9.6533 8.49 9.6533 8.88 9.2633C9.27 8.8733 9.27 8.2333 8.88 7.8433L6.7 5.6833L8.15 4.2333C8.46 3.9233 8.24 3.3833 7.79 3.3833H3.5C3.22 3.3833 3 3.6033 3 3.8833V8.1733C3 8.6233 3.54 8.8433 3.85 8.5333ZM8.15 20.5333L6.7 19.0833L8.88 16.9233C9.27 16.5333 9.27 15.8933 8.88 15.5033C8.49 15.1133 7.85 15.1133 7.46 15.5033L5.3 17.6833L3.85 16.2333C3.54 15.9233 3 16.1433 3 16.5933V20.8833C3 21.1633 3.22 21.3833 3.5 21.3833H7.79C8.24 21.3833 8.46 20.8433 8.15 20.5333ZM20.15 16.2333L18.7 17.6833L16.54 15.5033C16.15 15.1133 15.51 15.1133 15.12 15.5033C14.73 15.8933 14.73 16.5333 15.12 16.9233L17.3 19.0833L15.85 20.5333C15.54 20.8433 15.76 21.3833 16.21 21.3833H20.5C20.78 21.3833 21 21.1633 21 20.8833V16.5933C21 16.1433 20.46 15.9233 20.15 16.2333Z"
        fill={colorCode}
      />
    </svg>
  );
}
