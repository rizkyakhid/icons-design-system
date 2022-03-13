import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAddToPhotosIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddToPhotosIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAddToPhotosIconProps) {
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
        d="M3 6.38318C2.45 6.38318 2 6.83318 2 7.38318V20.3832C2 21.4832 2.9 22.3832 4 22.3832H17C17.55 22.3832 18 21.9332 18 21.3832C18 20.8332 17.55 20.3832 17 20.3832H5C4.45 20.3832 4 19.9332 4 19.3832V7.38318C4 6.83318 3.55 6.38318 3 6.38318ZM20 2.38318H8C6.9 2.38318 6 3.28318 6 4.38318V16.3832C6 17.4832 6.9 18.3832 8 18.3832H20C21.1 18.3832 22 17.4832 22 16.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318ZM18 11.3832H15V14.3832C15 14.9332 14.55 15.3832 14 15.3832C13.45 15.3832 13 14.9332 13 14.3832V11.3832H10C9.45 11.3832 9 10.9332 9 10.3832C9 9.83318 9.45 9.38318 10 9.38318H13V6.38318C13 5.83318 13.45 5.38318 14 5.38318C14.55 5.38318 15 5.83318 15 6.38318V9.38318H18C18.55 9.38318 19 9.83318 19 10.3832C19 10.9332 18.55 11.3832 18 11.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
