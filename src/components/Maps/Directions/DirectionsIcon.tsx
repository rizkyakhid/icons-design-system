import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IDirectionsIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DirectionsIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IDirectionsIconProps) {
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
        d="M21.7099 11.6733L12.7099 2.6733C12.3199 2.2833 11.6899 2.2833 11.2999 2.6733L2.29995 11.6733C1.90995 12.0633 1.90995 12.6933 2.29995 13.0833L11.2999 22.0833C11.6899 22.4733 12.3199 22.4733 12.7099 22.0833L21.7099 13.0833C22.0999 12.7033 22.0999 12.0733 21.7099 11.6733ZM13.9999 14.8833V12.3833H9.99995V14.3833C9.99995 14.9333 9.54995 15.3833 8.99995 15.3833C8.44995 15.3833 7.99995 14.9333 7.99995 14.3833V11.3833C7.99995 10.8333 8.44995 10.3833 8.99995 10.3833H13.9999V7.8833L17.1499 11.0333C17.3499 11.2333 17.3499 11.5433 17.1499 11.7433L13.9999 14.8833Z"
        fill={colorCode}
      />
    </svg>
  );
}
