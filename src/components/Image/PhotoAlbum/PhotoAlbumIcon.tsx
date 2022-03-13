import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPhotoAlbumIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PhotoAlbumIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPhotoAlbumIconProps) {
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
        d="M18 2.38318H6C4.9 2.38318 4 3.28318 4 4.38318V20.3832C4 21.4832 4.9 22.3832 6 22.3832H18C19.1 22.3832 20 21.4832 20 20.3832V4.38318C20 3.28318 19.1 2.38318 18 2.38318ZM6 4.38318H11V12.3832L8.5 10.8832L6 12.3832V4.38318ZM6.63 18.5732L8.62 16.0132C8.82 15.7632 9.2 15.7532 9.4 16.0032L11.14 18.1032L13.74 14.7632C13.94 14.5032 14.34 14.5032 14.53 14.7732L17.4 18.5932C17.65 18.9232 17.41 19.3932 17 19.3932H7.02C6.61 19.3832 6.37 18.9032 6.63 18.5732Z"
        fill={colorCode}
      />
    </svg>
  );
}
