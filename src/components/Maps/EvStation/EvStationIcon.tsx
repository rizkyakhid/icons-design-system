import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IEvStationIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function EvStationIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IEvStationIconProps) {
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
        d="M19.77 7.6133L19.78 7.6033L16.59 4.4133C16.3 4.1233 15.82 4.1233 15.53 4.4133C15.24 4.7033 15.24 5.1833 15.53 5.4733L17.11 7.0533C16.06 7.4533 15.35 8.5233 15.53 9.7633C15.69 10.8633 16.63 11.7533 17.73 11.8733C18.2 11.9233 18.61 11.8433 19 11.6733V18.8833C19 19.4333 18.55 19.8833 18 19.8833C17.45 19.8833 17 19.4333 17 18.8833V14.3833C17 13.2833 16.1 12.3833 15 12.3833H14V5.3833C14 4.2833 13.1 3.3833 12 3.3833H6C4.9 3.3833 4 4.2833 4 5.3833V20.3833C4 20.9333 4.45 21.3833 5 21.3833H13C13.55 21.3833 14 20.9333 14 20.3833V13.8833H15.5V18.7433C15.5 20.0533 16.44 21.2433 17.74 21.3733C19.24 21.5233 20.5 20.3533 20.5 18.8833V9.3833C20.5 8.6933 20.22 8.0633 19.77 7.6133ZM18 10.3833C17.45 10.3833 17 9.9333 17 9.3833C17 8.8333 17.45 8.3833 18 8.3833C18.55 8.3833 19 8.8333 19 9.3833C19 9.9333 18.55 10.3833 18 10.3833ZM8 16.5033V13.8833H6.83C6.45 13.8833 6.21 13.4833 6.39 13.1433L9.06 8.1433C9.3 7.6933 10 7.8633 10 8.3833V11.3833H11.14C11.52 11.3833 11.76 11.7933 11.57 12.1333L8.93 16.7533C8.68 17.1933 8 17.0133 8 16.5033Z"
        fill={colorCode}
      />
    </svg>
  );
}
