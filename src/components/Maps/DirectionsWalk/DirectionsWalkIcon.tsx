import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IDirectionsWalkIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DirectionsWalkIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IDirectionsWalkIconProps) {
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
        d="M13.5 5.8833C14.6 5.8833 15.5 4.9833 15.5 3.8833C15.5 2.7833 14.6 1.8833 13.5 1.8833C12.4 1.8833 11.5 2.7833 11.5 3.8833C11.5 4.9833 12.4 5.8833 13.5 5.8833ZM9.8 9.2833L7.24 22.1933C7.11 22.8033 7.59 23.3833 8.22 23.3833H8.3C8.77 23.3833 9.17 23.0633 9.28 22.6033L10.9 15.3833L13 17.3833V22.3833C13 22.9333 13.45 23.3833 14 23.3833C14.55 23.3833 15 22.9333 15 22.3833V16.7433C15 16.1933 14.78 15.6733 14.38 15.2933L12.9 13.8833L13.5 10.8833C14.57 12.1233 16.12 13.0133 17.86 13.2933C18.46 13.3833 19 12.9033 19 12.2933C19 11.8033 18.64 11.3933 18.15 11.3133C16.63 11.0633 15.37 10.1633 14.7 8.9833L13.7 7.3833C13.14 6.4933 12.02 6.1333 11.05 6.5433L7.22 8.1633C6.48 8.4833 6 9.2033 6 10.0133V12.3833C6 12.9333 6.45 13.3833 7 13.3833C7.55 13.3833 8 12.9333 8 12.3833V9.9833L9.8 9.2833Z"
        fill={colorCode}
      />
    </svg>
  );
}
