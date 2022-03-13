import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPhotoSizeSelectActualIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PhotoSizeSelectActualIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPhotoSizeSelectActualIconProps) {
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
        d="M21 3.38318H3C2 3.38318 1 4.38318 1 5.38318V19.3832C1 20.4832 1.9 21.3832 3 21.3832H21C22 21.3832 23 20.3832 23 19.3832V5.38318C23 4.38318 22 3.38318 21 3.38318ZM5.63 16.5732L8.12 13.3732C8.32 13.1232 8.7 13.1132 8.9 13.3632L11 15.8932L14.1 11.9032C14.3 11.6432 14.7 11.6432 14.9 11.9132L18.41 16.5932C18.66 16.9232 18.42 17.3932 18.01 17.3932H6.02C5.61 17.3832 5.37 16.9032 5.63 16.5732Z"
        fill={colorCode}
      />
    </svg>
  );
}
