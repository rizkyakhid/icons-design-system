import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBeenhereIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BeenhereIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBeenhereIconProps) {
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
        d="M19 1.3833H5C3.9 1.3833 3.01 2.2833 3.01 3.3833L3 16.3133C3 17.0033 3.35 17.6133 3.88 17.9733L11.45 23.0133C11.79 23.2333 12.22 23.2333 12.56 23.0133L20.12 17.9733C20.65 17.6133 21 17.0033 21 16.3133V3.3833C21 2.2833 20.1 1.3833 19 1.3833ZM18.3 8.0833L10.71 15.6733C10.32 16.0633 9.69 16.0633 9.3 15.6733L5.71 12.0833C5.32 11.6933 5.32 11.0633 5.71 10.6733C6.1 10.2833 6.73 10.2833 7.12 10.6733L10 13.5533L16.88 6.6733C17.27 6.2833 17.9 6.2833 18.29 6.6733C18.68 7.0633 18.69 7.6933 18.3 8.0833Z"
        fill={colorCode}
      />
    </svg>
  );
}
