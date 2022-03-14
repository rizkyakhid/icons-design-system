import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface INearMeDisabledIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NearMeDisabledIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: INearMeDisabledIconProps) {
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
        d="M12 6.7233L18.95 4.1433C19.75 3.8433 20.53 4.6233 20.24 5.4333L17.66 12.3833L12 6.7233ZM21.9 19.4533L4.93 2.4833C4.54 2.0933 3.91 2.0933 3.52 2.4833C3.13 2.8733 3.13 3.5033 3.52 3.8933L7.88 8.2533L3.68 9.8133C3.27 9.9733 3 10.3533 3 10.7833C3 11.2033 3.26 11.5833 3.65 11.7433L10.07 14.3133L12.64 20.7333C12.8 21.1233 13.18 21.3833 13.6 21.3833C14.03 21.3833 14.42 21.1133 14.57 20.7133L16.13 16.5133L20.49 20.8733C20.88 21.2633 21.51 21.2633 21.9 20.8733C22.29 20.4733 22.29 19.8433 21.9 19.4533Z"
        fill={colorCode}
      />
    </svg>
  );
}
