import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAddRoadIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddRoadIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAddRoadIconProps) {
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
        d="M20 18.3833V16.3833C20 15.8333 19.55 15.3833 19 15.3833C18.45 15.3833 18 15.8333 18 16.3833V18.3833H16C15.45 18.3833 15 18.8333 15 19.3833C15 19.9333 15.45 20.3833 16 20.3833H18V22.3833C18 22.9333 18.45 23.3833 19 23.3833C19.55 23.3833 20 22.9333 20 22.3833V20.3833H22C22.55 20.3833 23 19.9333 23 19.3833C23 18.8333 22.55 18.3833 22 18.3833H20Z"
        fill={colorCode}
      />
      <path
        d="M19 4.3833C18.45 4.3833 18 4.8333 18 5.3833V12.3833C18 12.9333 18.45 13.3833 19 13.3833C19.55 13.3833 20 12.9333 20 12.3833V5.3833C20 4.8333 19.55 4.3833 19 4.3833Z"
        fill={colorCode}
      />
      <path
        d="M5 20.3833C5.55 20.3833 6 19.9333 6 19.3833V5.3833C6 4.8333 5.55 4.3833 5 4.3833C4.45 4.3833 4 4.8333 4 5.3833V19.3833C4 19.9333 4.45 20.3833 5 20.3833Z"
        fill={colorCode}
      />
      <path
        d="M12 8.3833C12.55 8.3833 13 7.9333 13 7.3833V5.3833C13 4.8333 12.55 4.3833 12 4.3833C11.45 4.3833 11 4.8333 11 5.3833V7.3833C11 7.9333 11.45 8.3833 12 8.3833Z"
        fill={colorCode}
      />
      <path
        d="M12 14.3833C12.55 14.3833 13 13.9333 13 13.3833V11.3833C13 10.8333 12.55 10.3833 12 10.3833C11.45 10.3833 11 10.8333 11 11.3833V13.3833C11 13.9333 11.45 14.3833 12 14.3833Z"
        fill={colorCode}
      />
      <path
        d="M12 20.3833C12.55 20.3833 13 19.9333 13 19.3833V17.3833C13 16.8333 12.55 16.3833 12 16.3833C11.45 16.3833 11 16.8333 11 17.3833V19.3833C11 19.9333 11.45 20.3833 12 20.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
