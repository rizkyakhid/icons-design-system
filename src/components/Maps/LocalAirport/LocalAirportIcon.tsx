import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalAirportIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalAirportIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalAirportIconProps) {
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
        d="M21.48 14.0833L13.5 9.3833V3.8833C13.5 3.0533 12.83 2.3833 12 2.3833C11.17 2.3833 10.5 3.0533 10.5 3.8833V9.3833L2.52 14.0833C2.2 14.2633 2 14.6133 2 14.9833C2 15.6833 2.67 16.1833 3.34 15.9933L10.5 13.8933V19.3833L8.24 20.7333C8.09 20.8233 8 20.9933 8 21.1633V21.6633V21.7433C8 22.0733 8.31 22.3133 8.62 22.2333L11.54 21.5033L12 21.3833L12.38 21.4733L12.8 21.5833L14.7 22.0633L15.37 22.2333C15.69 22.3133 15.99 22.0733 15.99 21.7433V21.3733V21.1633C15.99 20.9833 15.9 20.8233 15.75 20.7333L13.5 19.3833V13.8833L20.66 15.9833C21.33 16.1833 22 15.6833 22 14.9833C22 14.6133 21.8 14.2633 21.48 14.0833Z"
        fill={colorCode}
      />
    </svg>
  );
}
