import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IEditRoadIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function EditRoadIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IEditRoadIconProps) {
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
        d="M17 4.3833C16.45 4.3833 16 4.8333 16 5.3833V12.2833L18 10.2833V5.3833C18 4.8333 17.55 4.3833 17 4.3833Z"
        fill={colorCode}
      />
      <path
        d="M5 20.3833C5.55 20.3833 6 19.9333 6 19.3833V5.3833C6 4.8333 5.55 4.3833 5 4.3833C4.45 4.3833 4 4.8333 4 5.3833V19.3833C4 19.9333 4.45 20.3833 5 20.3833Z"
        fill={colorCode}
      />
      <path
        d="M11 8.3833C11.55 8.3833 12 7.9333 12 7.3833V5.3833C12 4.8333 11.55 4.3833 11 4.3833C10.45 4.3833 10 4.8333 10 5.3833V7.3833C10 7.9333 10.45 8.3833 11 8.3833Z"
        fill={colorCode}
      />
      <path
        d="M11 14.3833C11.55 14.3833 12 13.9333 12 13.3833V11.3833C12 10.8333 11.55 10.3833 11 10.3833C10.45 10.3833 10 10.8333 10 11.3833V13.3833C10 13.9333 10.45 14.3833 11 14.3833Z"
        fill={colorCode}
      />
      <path
        d="M11 20.3833C11.55 20.3833 12 19.9333 12 19.3833V17.3833C12 16.8333 11.55 16.3833 11 16.3833C10.45 16.3833 10 16.8333 10 17.3833V19.3833C10 19.9333 10.45 20.3833 11 20.3833Z"
        fill={colorCode}
      />
      <path
        d="M22.56 12.9733L21.41 11.8233C20.82 11.2333 19.87 11.2333 19.29 11.8233L14 17.1133V19.8833C14 20.1633 14.22 20.3833 14.5 20.3833H17.27L22.56 15.0933C23.15 14.5033 23.15 13.5533 22.56 12.9733ZM16.58 18.8333H15.55V17.8033L19 14.3533L20.03 15.3833L16.58 18.8333Z"
        fill={colorCode}
      />
    </svg>
  );
}
