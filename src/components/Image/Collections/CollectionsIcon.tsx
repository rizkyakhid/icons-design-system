import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICollectionsIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CollectionsIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICollectionsIconProps) {
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
        d="M22 16.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318H8C6.9 2.38318 6 3.28318 6 4.38318V16.3832C6 17.4832 6.9 18.3832 8 18.3832H20C21.1 18.3832 22 17.4832 22 16.3832ZM11.4 12.9132L13.03 15.0932L15.61 11.8732C15.81 11.6232 16.19 11.6232 16.39 11.8732L19.35 15.5732C19.61 15.9032 19.38 16.3832 18.96 16.3832H9C8.59 16.3832 8.35 15.9132 8.6 15.5832L10.6 12.9132C10.8 12.6532 11.2 12.6532 11.4 12.9132V12.9132ZM2 7.38318V20.3832C2 21.4832 2.9 22.3832 4 22.3832H17C17.55 22.3832 18 21.9332 18 21.3832C18 20.8332 17.55 20.3832 17 20.3832H5C4.45 20.3832 4 19.9332 4 19.3832V7.38318C4 6.83318 3.55 6.38318 3 6.38318C2.45 6.38318 2 6.83318 2 7.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
