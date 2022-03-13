import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IReceiptLongIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ReceiptLongIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IReceiptLongIconProps) {
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
        d="M14 9.38318H10C9.45 9.38318 9 8.93318 9 8.38318C9 7.83318 9.45 7.38318 10 7.38318H14C14.55 7.38318 15 7.83318 15 8.38318C15 8.93318 14.55 9.38318 14 9.38318Z"
        fill={colorCode}
      />
      <path
        d="M14 12.3832H10C9.45 12.3832 9 11.9332 9 11.3832C9 10.8332 9.45 10.3832 10 10.3832H14C14.55 10.3832 15 10.8332 15 11.3832C15 11.9332 14.55 12.3832 14 12.3832Z"
        fill={colorCode}
      />
      <path
        d="M19.5 3.88318L18 2.38318L16.5 3.88318L15 2.38318L13.5 3.88318L12 2.38318L10.5 3.88318L9 2.38318L7.5 3.88318L6 2.38318V16.3832H4C3.45 16.3832 3 16.8332 3 17.3832V19.3832C3 21.0432 4.34 22.3832 6 22.3832H18C19.66 22.3832 21 21.0432 21 19.3832V2.38318L19.5 3.88318ZM15 20.3832H6C5.45 20.3832 5 19.9332 5 19.3832V18.3832H8H12H15V20.3832ZM19 19.3832C19 19.9332 18.55 20.3832 18 20.3832C17.45 20.3832 17 19.9332 17 19.3832V17.3832C17 16.8332 16.55 16.3832 16 16.3832H14H12H8V5.38318H19V19.3832Z"
        fill={colorCode}
      />
      <path
        d="M17 9.38318C17.5523 9.38318 18 8.93546 18 8.38318C18 7.83089 17.5523 7.38318 17 7.38318C16.4477 7.38318 16 7.83089 16 8.38318C16 8.93546 16.4477 9.38318 17 9.38318Z"
        fill={colorCode}
      />
      <path
        d="M17 12.3832C17.5523 12.3832 18 11.9355 18 11.3832C18 10.8309 17.5523 10.3832 17 10.3832C16.4477 10.3832 16 10.8309 16 11.3832C16 11.9355 16.4477 12.3832 17 12.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
