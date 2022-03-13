import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITuneIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TuneIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITuneIconProps) {
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
        d="M3 18.3832C3 18.9332 3.45 19.3832 4 19.3832H9V17.3832H4C3.45 17.3832 3 17.8332 3 18.3832ZM3 6.38318C3 6.93318 3.45 7.38318 4 7.38318H13V5.38318H4C3.45 5.38318 3 5.83318 3 6.38318ZM13 20.3832V19.3832H20C20.55 19.3832 21 18.9332 21 18.3832C21 17.8332 20.55 17.3832 20 17.3832H13V16.3832C13 15.8332 12.55 15.3832 12 15.3832C11.45 15.3832 11 15.8332 11 16.3832V20.3832C11 20.9332 11.45 21.3832 12 21.3832C12.55 21.3832 13 20.9332 13 20.3832ZM7 10.3832V11.3832H4C3.45 11.3832 3 11.8332 3 12.3832C3 12.9332 3.45 13.3832 4 13.3832H7V14.3832C7 14.9332 7.45 15.3832 8 15.3832C8.55 15.3832 9 14.9332 9 14.3832V10.3832C9 9.83318 8.55 9.38318 8 9.38318C7.45 9.38318 7 9.83318 7 10.3832ZM21 12.3832C21 11.8332 20.55 11.3832 20 11.3832H11V13.3832H20C20.55 13.3832 21 12.9332 21 12.3832ZM16 9.38318C16.55 9.38318 17 8.93318 17 8.38318V7.38318H20C20.55 7.38318 21 6.93318 21 6.38318C21 5.83318 20.55 5.38318 20 5.38318H17V4.38318C17 3.83318 16.55 3.38318 16 3.38318C15.45 3.38318 15 3.83318 15 4.38318V8.38318C15 8.93318 15.45 9.38318 16 9.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
