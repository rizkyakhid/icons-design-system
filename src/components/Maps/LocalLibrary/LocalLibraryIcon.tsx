import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalLibraryIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalLibraryIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalLibraryIconProps) {
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
        d="M12 11.9333C10.18 10.2333 7.88 9.0433 5.32 8.5833C4.11 8.3733 3 9.3333 3 10.5633V16.8033C3 18.4833 3.72 19.3633 4.71 19.4933C7.21 19.8133 9.48 20.8433 11.34 22.3633C11.69 22.6533 12.26 22.6833 12.61 22.4033C14.48 20.8733 16.77 19.8233 19.29 19.5033C20.23 19.3733 21 18.4433 21 17.4833V10.5633C21 9.3333 19.89 8.3733 18.68 8.5833C16.12 9.0433 13.82 10.2333 12 11.9333ZM12 8.3833C13.66 8.3833 15 7.0433 15 5.3833C15 3.7233 13.66 2.3833 12 2.3833C10.34 2.3833 9 3.7233 9 5.3833C9 7.0433 10.34 8.3833 12 8.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
