import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface INearMeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NearMeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: INearMeIconProps) {
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
        d="M18.75 4.3233L4.06999 10.4633C3.23999 10.8133 3.25999 11.9933 4.08999 12.3133L9.42999 14.3833C9.68999 14.4833 9.89999 14.6933 9.99999 14.9533L12.06 20.2833C12.38 21.1233 13.57 21.1433 13.92 20.3133L20.07 5.6433C20.4 4.8133 19.57 3.9833 18.75 4.3233Z"
        fill={colorCode}
      />
    </svg>
  );
}
