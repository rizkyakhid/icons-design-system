import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAddPhotoAlternativeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddPhotoAlternativeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAddPhotoAlternativeIconProps) {
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
        d="M21.02 5.38318H19V3.36318C19 2.82318 18.56 2.38318 18.02 2.38318H17.99C17.44 2.38318 17 2.82318 17 3.36318V5.38318H14.99C14.45 5.38318 14.01 5.82318 14 6.36318V6.39318C14 6.94318 14.44 7.38318 14.99 7.38318H17V9.39318C17 9.93318 17.44 10.3832 17.99 10.3732H18.02C18.56 10.3732 19 9.93318 19 9.39318V7.38318H21.02C21.56 7.38318 22 6.94318 22 6.40318V6.36318C22 5.82318 21.56 5.38318 21.02 5.38318ZM16 9.39318V8.38318H14.99C14.46 8.38318 13.96 8.17318 13.58 7.80318C13.21 7.42318 13 6.92318 13 6.36318C13 6.00318 13.1 5.67318 13.27 5.38318H5C3.9 5.38318 3 6.28318 3 7.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H17C18.1 21.3832 19 20.4832 19 19.3832V11.1032C18.7 11.2732 18.36 11.3832 17.98 11.3832C16.89 11.3732 16 10.4832 16 9.39318ZM15.96 19.3832H6C5.59 19.3832 5.35 18.9132 5.6 18.5832L7.58 15.9532C7.79 15.6732 8.2 15.6932 8.4 15.9732L10 18.3832L12.61 14.9032C12.81 14.6432 13.2 14.6332 13.4 14.8932L16.35 18.5732C16.61 18.9032 16.38 19.3832 15.96 19.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
