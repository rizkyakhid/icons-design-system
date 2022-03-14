import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalPrintshopIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalPrintshopIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalPrintshopIconProps) {
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
        d="M19 8.3833H5C3.34 8.3833 2 9.7233 2 11.3833V15.3833C2 16.4833 2.9 17.3833 4 17.3833H6V19.3833C6 20.4833 6.9 21.3833 8 21.3833H16C17.1 21.3833 18 20.4833 18 19.3833V17.3833H20C21.1 17.3833 22 16.4833 22 15.3833V11.3833C22 9.7233 20.66 8.3833 19 8.3833ZM15 19.3833H9C8.45 19.3833 8 18.9333 8 18.3833V14.3833H16V18.3833C16 18.9333 15.55 19.3833 15 19.3833ZM19 12.3833C18.45 12.3833 18 11.9333 18 11.3833C18 10.8333 18.45 10.3833 19 10.3833C19.55 10.3833 20 10.8333 20 11.3833C20 11.9333 19.55 12.3833 19 12.3833ZM17 3.3833H7C6.45 3.3833 6 3.8333 6 4.3833V6.3833C6 6.9333 6.45 7.3833 7 7.3833H17C17.55 7.3833 18 6.9333 18 6.3833V4.3833C18 3.8333 17.55 3.3833 17 3.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
