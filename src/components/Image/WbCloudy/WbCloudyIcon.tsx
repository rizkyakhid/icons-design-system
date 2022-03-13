import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IWbCloudyIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WbCloudyIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IWbCloudyIconProps) {
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
      <g clip-path="url(#clip0_73_4648)">
        <path
          d="M19.37 10.4232C18.68 6.97318 15.65 4.38318 12.01 4.38318C9.12001 4.38318 6.61001 6.02318 5.36001 8.42318C2.35001 8.74318 0.0100098 11.2932 0.0100098 14.3832C0.0100098 17.6932 2.70001 20.3832 6.01001 20.3832H19.01C21.77 20.3832 24.01 18.1432 24.01 15.3832C24.01 12.7432 21.96 10.6032 19.37 10.4232Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_4648">
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
