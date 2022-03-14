import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITerrainIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TerrainIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITerrainIconProps) {
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
        d="M13.2001 7.45328L10.2501 11.3833L12.5001 14.3833C12.8301 14.8233 12.7401 15.4533 12.3001 15.7833C11.8601 16.1133 11.2301 16.0333 10.9001 15.5833C9.85005 14.1833 8.59005 12.5133 7.80005 11.4433C7.40005 10.9133 6.60005 10.9133 6.20005 11.4433L2.20005 16.7733C1.71005 17.4433 2.18005 18.3833 3.00005 18.3833H21.0001C21.8201 18.3833 22.2901 17.4433 21.8001 16.7833L14.8001 7.45328C14.4001 6.91328 13.6001 6.91328 13.2001 7.45328Z"
        fill={colorCode}
      />
    </svg>
  );
}
