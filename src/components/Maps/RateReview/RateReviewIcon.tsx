import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IRateReviewIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RateReviewIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IRateReviewIconProps) {
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
        d="M20 2.3833H4C2.9 2.3833 2 3.2833 2 4.3833V22.3833L6 18.3833H20C21.1 18.3833 22 17.4833 22 16.3833V4.3833C22 3.2833 21.1 2.3833 20 2.3833ZM6 14.3833V11.9133L12.88 5.0333C13.08 4.8333 13.39 4.8333 13.59 5.0333L15.36 6.8033C15.56 7.0033 15.56 7.3133 15.36 7.5133L8.47 14.3833H6ZM17 14.3833H10.5L12.5 12.3833H17C17.55 12.3833 18 12.8333 18 13.3833C18 13.9333 17.55 14.3833 17 14.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
