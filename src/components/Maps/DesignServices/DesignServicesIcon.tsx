import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IDesignServicesIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DesignServicesIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IDesignServicesIconProps) {
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
        d="M16.24 11.8933L17.81 10.3233L14.06 6.5733L12.49 8.1433L8.35 4.0133C7.57 3.2333 6.3 3.2333 5.52 4.0133L3.62 5.9133C2.84 6.6933 2.84 7.9633 3.62 8.7433L7.75 12.8733L3.15 17.4833C3.05 17.5833 3 17.7033 3 17.8433V20.8833C3 21.1633 3.22 21.3833 3.5 21.3833H6.54C6.67 21.3833 6.8 21.3333 6.89 21.2333L11.51 16.6133L15.64 20.7433C16.96 22.0633 18.4 20.8133 18.47 20.7433L20.37 18.8433C21.15 18.0633 21.15 16.7933 20.37 16.0133L16.24 11.8933ZM9.18 11.4533L5.04 7.3233L6.93 5.4233L8.2 6.6933L7.73 7.1833C7.34 7.5733 7.34 8.2033 7.73 8.5933C8.12 8.9833 8.75 8.9833 9.14 8.5933L9.62 8.1133L11.07 9.5633L9.18 11.4533ZM17.06 19.3433L12.93 15.2133L14.83 13.3133L16.28 14.7633L15.8 15.2433C15.41 15.6333 15.41 16.2633 15.8 16.6533C16.19 17.0433 16.82 17.0433 17.21 16.6533L17.69 16.1733L18.96 17.4433L17.06 19.3433Z"
        fill={colorCode}
      />
      <path
        d="M20.71 7.4233C21.1 7.0333 21.1 6.4033 20.71 6.0133L18.37 3.6733C17.9 3.2033 17.25 3.3833 16.96 3.6733L15.13 5.5033L18.88 9.2533L20.71 7.4233Z"
        fill={colorCode}
      />
    </svg>
  );
}
