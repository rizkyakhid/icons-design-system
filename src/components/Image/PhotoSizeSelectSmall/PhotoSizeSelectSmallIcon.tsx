import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPhotoSizeSelectSmallIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PhotoSizeSelectSmallIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPhotoSizeSelectSmallIconProps) {
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
        d="M23 15.3832H21V17.3832H23V15.3832ZM23 11.3832H21V13.3832H23V11.3832ZM23 19.3832H21V21.3832C22 21.3832 23 20.3832 23 19.3832ZM15 3.38318H13V5.38318H15V3.38318ZM23 7.38318H21V9.38318H23V7.38318ZM21 3.38318V5.38318H23C23 4.38318 22 3.38318 21 3.38318ZM3 21.3832H11V17.3832C11 16.2832 10.1 15.3832 9 15.3832H1V19.3832C1 20.4832 1.9 21.3832 3 21.3832ZM3 7.38318H1V9.38318H3V7.38318ZM15 19.3832H13V21.3832H15V19.3832ZM19 3.38318H17V5.38318H19V3.38318ZM19 19.3832H17V21.3832H19V19.3832ZM3 3.38318C2 3.38318 1 4.38318 1 5.38318H3V3.38318ZM3 11.3832H1V13.3832H3V11.3832ZM11 3.38318H9V5.38318H11V3.38318ZM7 3.38318H5V5.38318H7V3.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
