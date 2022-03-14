import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IRunCircleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RunCircleIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IRunCircleIconProps) {
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
        d="M12 2.3833C6.48 2.3833 2 6.8633 2 12.3833C2 17.9033 6.48 22.3833 12 22.3833C17.52 22.3833 22 17.9033 22 12.3833C22 6.8633 17.52 2.3833 12 2.3833ZM13.5 6.3833C14.05 6.3833 14.5 6.8333 14.5 7.3833C14.5 7.9333 14.05 8.3833 13.5 8.3833C12.95 8.3833 12.5 7.9333 12.5 7.3833C12.5 6.8333 12.95 6.3833 13.5 6.3833ZM15.41 12.2933C14.7 12.0933 13.78 11.5533 13.09 10.6333L12.68 12.9833L13.87 14.2833C13.95 14.3633 14 14.4833 14 14.6033V17.8833C14 18.1633 13.78 18.3833 13.5 18.3833C13.22 18.3833 13 18.1633 13 17.8833V14.8033L11.89 13.5933L11.46 15.7433C11.41 16.0133 11.14 16.1933 10.87 16.1333L8.09 15.5633C7.82 15.5033 7.64 15.2433 7.7 14.9733C7.76 14.7033 8.02 14.5333 8.29 14.5833L10.58 15.0533L11.54 10.1633L10 10.7333V11.8833C10 12.1633 9.78 12.3833 9.5 12.3833C9.22 12.3833 9 12.1633 9 11.8833V10.3833C9 10.1733 9.13 9.9833 9.33 9.9133L12.28 8.8233C12.77 8.6433 13.3 8.8633 13.53 9.3333C14.18 10.6833 15.08 11.1833 15.63 11.3333C15.85 11.3833 16 11.5633 16 11.7833V11.8233C16 12.1333 15.71 12.3733 15.41 12.2933Z"
        fill={colorCode}
      />
    </svg>
  );
}
