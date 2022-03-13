import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IExposurePlus1IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ExposurePlus1Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IExposurePlus1IconProps) {
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
        d="M9 7.38318C8.45 7.38318 8 7.83318 8 8.38318V11.3832H5C4.45 11.3832 4 11.8332 4 12.3832C4 12.9332 4.45 13.3832 5 13.3832H8V16.3832C8 16.9332 8.45 17.3832 9 17.3832C9.55 17.3832 10 16.9332 10 16.3832V13.3832H13C13.55 13.3832 14 12.9332 14 12.3832C14 11.8332 13.55 11.3832 13 11.3832H10V8.38318C10 7.83318 9.55 7.38318 9 7.38318ZM20 18.3832H18V7.76318L15 8.78318V7.08318L19.7 5.38318H20V18.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
