import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPlumbingIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PlumbingIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPlumbingIconProps) {
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
        d="M19.28 5.31328L17.16 3.19328C16.38 2.41328 15.11 2.41328 14.33 3.19328L11.5 6.02328L13.62 8.14328L15.74 6.02328L19.28 9.56328C20.45 8.38328 20.45 6.48328 19.28 5.31328Z"
        fill={colorCode}
      />
      <path
        d="M5.48999 14.1533C6.07999 14.7433 7.02999 14.7433 7.60999 14.1533L10.08 11.6833L7.95999 9.55328L5.48999 12.0233C4.89999 12.6133 4.89999 13.5633 5.48999 14.1533Z"
        fill={colorCode}
      />
      <path
        d="M14.33 8.84329L13.62 9.55329L10.44 6.37329C9.84997 5.78329 8.89997 5.78329 8.31997 6.37329C7.72997 6.96329 7.72997 7.91329 8.31997 8.49329L11.5 11.6733L4.49997 18.6733C3.79997 19.3733 3.61997 20.5133 4.20997 21.3233C4.94997 22.3533 6.39997 22.4433 7.25997 21.5833L16.45 12.3833C16.84 12.7733 17.47 12.7733 17.86 12.3833C18.25 11.9933 18.25 11.3633 17.86 10.9733L15.74 8.85329C15.35 8.45329 14.72 8.45329 14.33 8.84329Z"
        fill={colorCode}
      />
    </svg>
  );
}
