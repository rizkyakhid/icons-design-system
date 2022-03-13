import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICameraFrontIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CameraFrontIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICameraFrontIconProps) {
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
      <g clip-path="url(#clip0_73_4204)">
        <path
          d="M17 0.383179H7C5.9 0.383179 5 1.28318 5 2.38318V16.3832C5 17.4832 5.9 18.3832 7 18.3832H17C18.1 18.3832 19 17.4832 19 16.3832V2.38318C19 1.28318 18.1 0.383179 17 0.383179ZM17 12.8832C17 11.2132 13.67 10.3832 12 10.3832C10.33 10.3832 7 11.2132 7 12.8832V3.38318C7 2.83318 7.45 2.38318 8 2.38318H16C16.55 2.38318 17 2.83318 17 3.38318V12.8832ZM10.85 19.2332C10.54 18.9232 10 19.1432 10 19.5932V20.3832H6C5.45 20.3832 5 20.8332 5 21.3832C5 21.9332 5.45 22.3832 6 22.3832H10V23.1732C10 23.6232 10.54 23.8432 10.85 23.5232L12.64 21.7332C12.84 21.5332 12.84 21.2232 12.64 21.0232L10.85 19.2332ZM18 20.3832H15C14.45 20.3832 14 20.8332 14 21.3832C14 21.9332 14.45 22.3832 15 22.3832H18C18.55 22.3832 19 21.9332 19 21.3832C19 20.8332 18.55 20.3832 18 20.3832ZM12 8.38318C13.1 8.38318 14 7.48318 14 6.38318C14 5.28318 13.1 4.38318 12 4.38318C10.9 4.38318 10.01 5.28318 10.01 6.38318C10.01 7.48318 10.9 8.38318 12 8.38318Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_4204">
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
