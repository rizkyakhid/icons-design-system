import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPersonPinIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PersonPinIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPersonPinIconProps) {
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
        d="M19 2.3833H5C3.89 2.3833 3 3.2833 3 4.3833V18.3833C3 19.4833 3.9 20.3833 5 20.3833H9L11.29 22.6733C11.68 23.0633 12.31 23.0633 12.7 22.6733L15 20.3833H19C20.1 20.3833 21 19.4833 21 18.3833V4.3833C21 3.2833 20.1 2.3833 19 2.3833ZM12 5.6833C13.49 5.6833 14.7 6.8933 14.7 8.3833C14.7 9.8733 13.49 11.0833 12 11.0833C10.51 11.0833 9.3 9.8733 9.3 8.3833C9.3 6.8933 10.51 5.6833 12 5.6833ZM18 16.3833H6V15.4833C6 13.4833 10 12.3833 12 12.3833C14 12.3833 18 13.4833 18 15.4833V16.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
