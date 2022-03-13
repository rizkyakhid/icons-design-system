import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILooks4IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Looks4Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILooks4IconProps) {
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
      <g clip-path="url(#clip0_73_4462)">
        <path
          d="M19.04 3.38318H5.03998C3.93998 3.38318 3.03998 4.28318 3.03998 5.38318V19.3832C3.03998 20.4832 3.93998 21.3832 5.03998 21.3832H19.04C20.14 21.3832 21.04 20.4832 21.04 19.3832V5.38318C21.04 4.28318 20.14 3.38318 19.04 3.38318ZM14.04 17.3832C13.49 17.3832 13.04 16.9332 13.04 16.3832V13.3832H10.04C9.48998 13.3832 9.03998 12.9332 9.03998 12.3832V8.38318C9.03998 7.83318 9.48998 7.38318 10.04 7.38318C10.59 7.38318 11.04 7.83318 11.04 8.38318V11.3832H13.04V8.38318C13.04 7.83318 13.49 7.38318 14.04 7.38318C14.59 7.38318 15.04 7.83318 15.04 8.38318V16.3832C15.04 16.9332 14.59 17.3832 14.04 17.3832Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_4462">
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
