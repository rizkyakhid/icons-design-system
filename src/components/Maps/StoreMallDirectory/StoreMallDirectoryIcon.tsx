import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IStoreMallDirectoryIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StoreMallDirectoryIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IStoreMallDirectoryIconProps) {
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
        d="M20.16 8.1833C20.07 7.7233 19.66 7.3833 19.18 7.3833H4.82C4.34 7.3833 3.93 7.7233 3.84 8.1833L3 12.3833V13.3833C3 13.9333 3.45 14.3833 4 14.3833V19.3833C4 19.9333 4.45 20.3833 5 20.3833H13C13.55 20.3833 14 19.9333 14 19.3833V14.3833H18V19.3833C18 19.9333 18.45 20.3833 19 20.3833C19.55 20.3833 20 19.9333 20 19.3833V14.3833C20.55 14.3833 21 13.9333 21 13.3833V12.3833L20.16 8.1833ZM12 18.3833H6V14.3833H12V18.3833ZM5 6.3833H19C19.55 6.3833 20 5.9333 20 5.3833C20 4.8333 19.55 4.3833 19 4.3833H5C4.45 4.3833 4 4.8333 4 5.3833C4 5.9333 4.45 6.3833 5 6.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
