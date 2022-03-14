import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IRestaurantMenuIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RestaurantMenuIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IRestaurantMenuIconProps) {
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
        d="M8.1 13.7233L10.93 10.8933L4.74 4.71332C4.26 4.23332 3.43 4.36332 3.13 4.98332C2.42 6.47332 2.68 8.30332 3.91 9.54332L8.1 13.7233ZM14.88 11.9133C16.41 12.6233 18.56 12.1233 20.15 10.5333C22.06 8.62332 22.43 5.88332 20.96 4.41332C19.5 2.95332 16.76 3.31332 14.84 5.22332C13.25 6.81332 12.75 8.96332 13.46 10.4933L4.4 19.5533C4.01 19.9433 4.01 20.5733 4.4 20.9633C4.79 21.3533 5.42 21.3533 5.81 20.9633L12 14.7933L18.18 20.9733C18.57 21.3633 19.2 21.3633 19.59 20.9733C19.98 20.5833 19.98 19.9533 19.59 19.5633L13.41 13.3833L14.88 11.9133Z"
        fill={colorCode}
      />
    </svg>
  );
}
