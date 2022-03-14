import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalPlayIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalPlayIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalPlayIconProps) {
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
        d="M20 12.3833C20 11.6233 20.43 10.9633 21.06 10.6233C21.66 10.2933 22 9.6133 22 8.9233V6.3833C22 5.2833 21.1 4.3833 20 4.3833H4C2.9 4.3833 2.01 5.2733 2.01 6.3733V8.9233C2.01 9.6133 2.34 10.2933 2.95 10.6133C3.58 10.9633 4 11.6233 4 12.3833C4 13.1433 3.57 13.8133 2.94 14.1433C2.34 14.4733 2 15.1533 2 15.8433V18.0933C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833V15.8433C22 15.1533 21.66 14.4733 21.06 14.1433C20.43 13.8033 20 13.1433 20 12.3833ZM14.5 16.4833L12 14.8833L9.5 16.4933C9.12 16.7333 8.63 16.3833 8.75 15.9433L9.5 13.0633L7.2 11.1833C6.85 10.8933 7.03 10.3233 7.49 10.2933L10.45 10.1233L11.53 7.3733C11.7 6.9533 12.3 6.9533 12.46 7.3733L13.54 10.1333L16.5 10.3033C16.95 10.3333 17.14 10.9033 16.79 11.1933L14.49 13.0733L15.25 15.9333C15.37 16.3833 14.88 16.7333 14.5 16.4833Z"
        fill={colorCode}
      />
    </svg>
  );
}
