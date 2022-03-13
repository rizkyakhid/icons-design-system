import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMovieFilterIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MovieFilterIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMovieFilterIconProps) {
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
        d="M21.5 4.38318H18L19.74 6.99318C19.85 7.16318 19.73 7.38318 19.53 7.38318H17.53C17.2 7.38318 16.88 7.21318 16.7 6.93318L15 4.38318H13L14.74 6.99318C14.85 7.16318 14.73 7.38318 14.53 7.38318H12.53C12.2 7.38318 11.88 7.21318 11.7 6.93318L10 4.38318H8L9.74 6.99318C9.85 7.16318 9.73 7.38318 9.53 7.38318H7.53C7.2 7.38318 6.89 7.21318 6.7 6.93318L5 4.38318H4C2.9 4.38318 2.01 5.28318 2.01 6.38318L2 18.3832C2 19.4832 2.9 20.3832 4 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832V4.88318C22 4.60318 21.78 4.38318 21.5 4.38318ZM11.25 15.6332L10 18.3832L8.75 15.6332L6 14.3832L8.75 13.1332L10 10.3832L11.25 13.1332L14 14.3832L11.25 15.6332ZM16.94 12.3232L16 14.3832L15.06 12.3232L13 11.3832L15.06 10.4432L16 8.38318L16.94 10.4432L19 11.3832L16.94 12.3232Z"
        fill={colorCode}
      />
    </svg>
  );
}
