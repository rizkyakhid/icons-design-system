import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMusicOffIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MusicOffIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMusicOffIconProps) {
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
        d="M14 9.99318V7.38318H16C17.1 7.38318 18 6.48318 18 5.38318C18 4.28318 17.1 3.38318 16 3.38318H13C12.45 3.38318 12 3.83318 12 4.38318V7.99318L14 9.99318ZM5.11998 3.94318C4.72998 3.55318 4.09998 3.55318 3.70998 3.94318C3.31998 4.33318 3.31998 4.96318 3.70998 5.35318L12 13.6532V13.9332C11.06 13.3932 9.89998 13.1832 8.66998 13.6132C7.32998 14.0932 6.29998 15.2832 6.05998 16.6832C5.59998 19.4232 7.91998 21.7632 10.65 21.3332C12.61 21.0232 14 19.2232 14 17.2332V15.6532L19.02 20.6732C19.41 21.0632 20.04 21.0632 20.43 20.6732C20.82 20.2832 20.82 19.6532 20.43 19.2632L5.11998 3.94318Z"
        fill={colorCode}
      />
    </svg>
  );
}
