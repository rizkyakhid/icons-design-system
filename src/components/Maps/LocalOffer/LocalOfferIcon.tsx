import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalOfferIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalOfferIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalOfferIconProps) {
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
        d="M21.41 11.9633L12.41 2.9633C12.05 2.6033 11.55 2.3833 11 2.3833H4C2.9 2.3833 2 3.2833 2 4.3833V11.3833C2 11.9333 2.22 12.4333 2.59 12.8033L11.59 21.8033C11.95 22.1633 12.45 22.3833 13 22.3833C13.55 22.3833 14.05 22.1633 14.41 21.7933L21.41 14.7933C21.78 14.4333 22 13.9333 22 13.3833C22 12.8333 21.77 12.3233 21.41 11.9633ZM5.5 7.3833C4.67 7.3833 4 6.7133 4 5.8833C4 5.0533 4.67 4.3833 5.5 4.3833C6.33 4.3833 7 5.0533 7 5.8833C7 6.7133 6.33 7.3833 5.5 7.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
