import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalPoliceIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalPoliceIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalPoliceIconProps) {
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
        d="M14.5 12.9733L15.13 15.7033C15.23 16.1333 14.76 16.4733 14.38 16.2433L12 14.8033L9.61 16.2433C9.23 16.4733 8.76 16.1333 8.86 15.7033L9.5 12.9833L7.4 11.1733C7.06 10.8833 7.24 10.3333 7.68 10.2933L10.46 10.0533L11.54 7.4933C11.71 7.0833 12.29 7.0833 12.46 7.4933L13.54 10.0433L16.32 10.2833C16.76 10.3233 16.94 10.8733 16.6 11.1633L14.5 12.9733ZM4.19 4.8533C3.47 5.1733 3 5.8933 3 6.6833V11.3833C3 16.9333 6.84 22.1233 12 23.3833C17.16 22.1233 21 16.9333 21 11.3833V6.6833C21 5.8933 20.53 5.1733 19.81 4.8533L12.81 1.7433C12.29 1.5133 11.7 1.5133 11.19 1.7433L4.19 4.8533Z"
        fill={colorCode}
      />
    </svg>
  );
}
