import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILooksTwoIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LooksTwoIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILooksTwoIconProps) {
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
        d="M19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM15 11.3832C15 12.4832 14.1 13.3832 13 13.3832H11V15.3832H14C14.55 15.3832 15 15.8332 15 16.3832C15 16.9332 14.55 17.3832 14 17.3832H10C9.45 17.3832 9 16.9332 9 16.3832V13.3832C9 12.2832 9.9 11.3832 11 11.3832H13V9.38318H10C9.45 9.38318 9 8.93318 9 8.38318C9 7.83318 9.45 7.38318 10 7.38318H13C14.1 7.38318 15 8.28318 15 9.38318V11.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
