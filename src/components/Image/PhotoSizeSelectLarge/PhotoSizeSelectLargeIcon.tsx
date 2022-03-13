import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPhotoSizeSelectLargeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PhotoSizeSelectLargeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPhotoSizeSelectLargeIconProps) {
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
        d="M21 15.3832H23V17.3832H21V15.3832ZM21 11.3832H23V13.3832H21V11.3832ZM23 19.3832H21V21.3832C22 21.3832 23 20.3832 23 19.3832ZM13 3.38318H15V5.38318H13V3.38318ZM21 7.38318H23V9.38318H21V7.38318ZM21 3.38318V5.38318H23C23 4.38318 22 3.38318 21 3.38318ZM1 7.38318H3V9.38318H1V7.38318ZM17 3.38318H19V5.38318H17V3.38318ZM17 19.3832H19V21.3832H17V19.3832ZM3 3.38318C2 3.38318 1 4.38318 1 5.38318H3V3.38318ZM9 3.38318H11V5.38318H9V3.38318ZM5 3.38318H7V5.38318H5V3.38318ZM1 11.3832V19.3832C1 20.4832 1.9 21.3832 3 21.3832H15V13.3832C15 12.2832 14.1 11.3832 13 11.3832H1ZM3.63 18.5732L5.12 16.6632C5.32 16.4132 5.69 16.4032 5.9 16.6532L7.29 18.3232L9.39 15.6232C9.59 15.3632 9.99 15.3632 10.18 15.6332L12.4 18.5932C12.65 18.9232 12.41 19.3932 12 19.3932H4.02C3.61 19.3832 3.37 18.9032 3.63 18.5732Z"
        fill={colorCode}
      />
    </svg>
  );
}
