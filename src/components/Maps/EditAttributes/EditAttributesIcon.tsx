import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IEditAttributesIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function EditAttributesIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IEditAttributesIconProps) {
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
        d="M17.63 7.3833H6.37C3.96 7.3833 2 9.6233 2 12.3833C2 15.1433 3.96 17.3833 6.37 17.3833H17.63C20.04 17.3833 22 15.1433 22 12.3833C22 9.6233 20.04 7.3833 17.63 7.3833ZM11.11 10.9833L7.6 14.4933C7.5 14.5933 7.37 14.6433 7.25 14.6433C7.13 14.6433 6.99 14.5933 6.9 14.4933L5.04 12.6333C4.84 12.4333 4.84 12.1233 5.04 11.9233C5.24 11.7233 5.55 11.7233 5.75 11.9233L7.26 13.4333L10.42 10.2733C10.62 10.0733 10.93 10.0733 11.13 10.2733C11.33 10.4733 11.3 10.7833 11.11 10.9833Z"
        fill={colorCode}
      />
    </svg>
  );
}
