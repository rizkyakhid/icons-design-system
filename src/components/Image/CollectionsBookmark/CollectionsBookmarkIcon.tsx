import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICollcetionsBookmarkIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CollcetionsBookmarkIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICollcetionsBookmarkIconProps) {
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
        d="M17 20.3832H5C4.45 20.3832 4 19.9332 4 19.3832V7.38318C4 6.83318 3.55 6.38318 3 6.38318C2.45 6.38318 2 6.83318 2 7.38318V20.3832C2 21.4832 2.9 22.3832 4 22.3832H17C17.55 22.3832 18 21.9332 18 21.3832C18 20.8332 17.55 20.3832 17 20.3832ZM20 2.38318H8C6.9 2.38318 6 3.28318 6 4.38318V16.3832C6 17.4832 6.9 18.3832 8 18.3832H20C21.1 18.3832 22 17.4832 22 16.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318ZM20 12.3832L17.5 10.8832L15 12.3832V4.38318H20V12.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
