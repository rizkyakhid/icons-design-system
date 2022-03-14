import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPinDropIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PinDropIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPinDropIconProps) {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 20.3833H18C18.55 20.3833 19 20.8333 19 21.3833C19 21.9333 18.55 22.3833 18 22.3833H6C5.45 22.3833 5 21.9333 5 21.3833C5 20.8333 5.45 20.3833 6 20.3833ZM12 7.3833C10.9 7.3833 10 8.2833 10 9.3833C10 10.4833 10.9 11.3833 12 11.3833C12.5304 11.3833 13.0391 11.1726 13.4142 10.7975C13.7893 10.4224 14 9.91373 14 9.3833C14 8.85287 13.7893 8.34416 13.4142 7.96909C13.0391 7.59401 12.5304 7.3833 12 7.3833ZM12 2.3833C15.27 2.3833 19 4.8433 19 9.5333C19 12.5133 16.87 15.6533 12.61 18.9233C12.25 19.2033 11.75 19.2033 11.39 18.9233C7.13 15.6433 5 12.5133 5 9.5333C5 4.8433 8.73 2.3833 12 2.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
