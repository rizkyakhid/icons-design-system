import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFilterFramesIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FilterFramesIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFilterFramesIconProps) {
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
      <g clip-path="url(#clip0_73_4351)">
        <path
          d="M20 4.38319H16L12.71 1.09319C12.32 0.70319 11.69 0.70319 11.3 1.09319L8 4.38319H4C2.9 4.38319 2 5.28319 2 6.38319V20.3832C2 21.4832 2.9 22.3832 4 22.3832H20C21.1 22.3832 22 21.4832 22 20.3832V6.38319C22 5.28319 21.1 4.38319 20 4.38319ZM19 20.3832H5C4.45 20.3832 4 19.9332 4 19.3832V7.38319C4 6.83319 4.45 6.38319 5 6.38319H8.52L12.04 2.88319L15.52 6.38319H19C19.55 6.38319 20 6.83319 20 7.38319V19.3832C20 19.9332 19.55 20.3832 19 20.3832ZM17 8.38319H7C6.45 8.38319 6 8.83319 6 9.38319V17.3832C6 17.9332 6.45 18.3832 7 18.3832H17C17.55 18.3832 18 17.9332 18 17.3832V9.38319C18 8.83319 17.55 8.38319 17 8.38319Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_4351">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.383179)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
