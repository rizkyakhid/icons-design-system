import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICleaningServicesIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CleaningServicesIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICleaningServicesIconProps) {
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
        d="M16 11.3833H15V4.3833C15 2.7233 13.66 1.3833 12 1.3833C10.34 1.3833 9 2.7233 9 4.3833V11.3833H8C5.24 11.3833 3 13.6233 3 16.3833V21.3833C3 22.4833 3.9 23.3833 5 23.3833H19C20.1 23.3833 21 22.4833 21 21.3833V16.3833C21 13.6233 18.76 11.3833 16 11.3833ZM19 21.3833H17V18.3833C17 17.8333 16.55 17.3833 16 17.3833C15.45 17.3833 15 17.8333 15 18.3833V21.3833H13V18.3833C13 17.8333 12.55 17.3833 12 17.3833C11.45 17.3833 11 17.8333 11 18.3833V21.3833H9V18.3833C9 17.8333 8.55 17.3833 8 17.3833C7.45 17.3833 7 17.8333 7 18.3833V21.3833H5V16.3833C5 14.7333 6.35 13.3833 8 13.3833H16C17.65 13.3833 19 14.7333 19 16.3833V21.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
