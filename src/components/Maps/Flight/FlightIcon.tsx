import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFlightIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlightIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFlightIconProps) {
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
        d="M21 14.9633C21 14.6033 20.81 14.2733 20.51 14.0733L13 9.3833V3.8833C13 3.0533 12.33 2.3833 11.5 2.3833C10.67 2.3833 10 3.0533 10 3.8833V9.3833L2.49 14.0733C2.19 14.2633 2 14.6033 2 14.9633C2 15.6633 2.68 16.1733 3.36 15.9633L10 13.8833V19.3833L8.2 20.7333C8.07 20.8233 8 20.9733 8 21.1333V21.7233C8 22.0533 8.32 22.2933 8.64 22.2033L11.5 21.3833L14.36 22.2033C14.68 22.2933 15 22.0533 15 21.7233V21.1333C15 20.9733 14.93 20.8233 14.8 20.7333L13 19.3833V13.8833L19.64 15.9633C20.32 16.1733 21 15.6633 21 14.9633Z"
        fill={colorCode}
      />
    </svg>
  );
}
