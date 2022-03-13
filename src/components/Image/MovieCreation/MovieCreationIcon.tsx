import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMovieCreationIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MovieCreationIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMovieCreationIconProps) {
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
        d="M18 4.38318L19.82 8.02318C19.9 8.18318 19.78 8.38318 19.6 8.38318H17.62C17.24 8.38318 16.89 8.17318 16.73 7.83318L15 4.38318H13L14.82 8.02318C14.9 8.18318 14.78 8.38318 14.6 8.38318H12.62C12.24 8.38318 11.89 8.17318 11.73 7.83318L10 4.38318H8L9.82 8.02318C9.9 8.18318 9.78 8.38318 9.6 8.38318H7.62C7.24 8.38318 6.89 8.17318 6.72 7.83318L5 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318V18.3832C2 19.4832 2.9 20.3832 4 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832V5.38318C22 4.83318 21.55 4.38318 21 4.38318H18Z"
        fill={colorCode}
      />
    </svg>
  );
}
