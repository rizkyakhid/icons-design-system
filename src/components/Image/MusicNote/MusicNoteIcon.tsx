import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMusicNoteIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MusicNoteIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMusicNoteIconProps) {
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
        d="M12 5.38318V13.9332C11.06 13.3932 9.89997 13.1832 8.66997 13.6132C7.32997 14.0932 6.29997 15.2832 6.05997 16.6832C5.59997 19.4232 7.91997 21.7632 10.65 21.3332C12.61 21.0232 14 19.2232 14 17.2332V7.38318H16C17.1 7.38318 18 6.48318 18 5.38318C18 4.28318 17.1 3.38318 16 3.38318H14C12.9 3.38318 12 4.28318 12 5.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
