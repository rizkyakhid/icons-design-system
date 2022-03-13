import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface INaturePeopleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function NaturePeopleIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: INaturePeopleIconProps) {
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
        d="M4.5 11.3832C5.32843 11.3832 6 10.7116 6 9.88318C6 9.05475 5.32843 8.38318 4.5 8.38318C3.67157 8.38318 3 9.05475 3 9.88318C3 10.7116 3.67157 11.3832 4.5 11.3832Z"
        fill={colorCode}
      />
      <path
        d="M22.17 9.55318C22.17 5.64318 18.98 2.49318 15.06 2.55318C11.23 2.61318 8.07 5.92318 8.18 9.74318C8.27 13.1232 10.76 15.9032 14.01 16.4432V20.3832H6V17.3832H6.5C6.78 17.3832 7 17.1632 7 16.8832V13.3832C7 12.8332 6.55 12.3832 6 12.3832H3C2.45 12.3832 2 12.8332 2 13.3832V16.8832C2 17.1632 2.22 17.3832 2.5 17.3832H3V21.3832C3 21.9332 3.45 22.3832 4 22.3832H18C18.55 22.3832 19 21.9332 19 21.3832C19 20.8332 18.55 20.3832 18 20.3832H16V16.5032C19.47 16.0932 22.17 13.1432 22.17 9.55318Z"
        fill={colorCode}
      />
    </svg>
  );
}
