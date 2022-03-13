import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPanoramaHorizontalIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PanoramaHorizontalIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPanoramaHorizontalIconProps) {
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
        d="M20 6.92318V17.8332C17.4 17.0632 14.72 16.6732 12 16.6732C9.28 16.6732 6.6 17.0632 4 17.8332V6.92318C6.6 7.69318 9.28 8.08318 12 8.08318C14.72 8.09318 17.4 7.70318 20 6.92318ZM21.43 4.38318C21.33 4.38318 21.23 4.40318 21.12 4.44318C18.18 5.54318 15.09 6.08318 12 6.08318C8.91 6.08318 5.82 5.53318 2.88 4.44318C2.77 4.40318 2.66 4.38318 2.57 4.38318C2.23 4.38318 2 4.61318 2 5.01318V19.7632C2 20.1532 2.23 20.3832 2.57 20.3832C2.67 20.3832 2.77 20.3632 2.88 20.3232C5.82 19.2232 8.91 18.6832 12 18.6832C15.09 18.6832 18.18 19.2332 21.12 20.3232C21.23 20.3632 21.33 20.3832 21.43 20.3832C21.76 20.3832 22 20.1532 22 19.7532V5.01318C22 4.61318 21.76 4.38318 21.43 4.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
