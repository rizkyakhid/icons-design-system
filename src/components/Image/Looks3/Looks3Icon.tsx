import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILooks3IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Looks3Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILooks3IconProps) {
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
        d="M19 3.38318H5.01001C3.91001 3.38318 3.01001 4.28318 3.01001 5.38318V19.3832C3.01001 20.4832 3.91001 21.3832 5.01001 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM15.01 10.8832C15.01 11.7132 14.34 12.3832 13.51 12.3832C14.34 12.3832 15.01 13.0532 15.01 13.8832V15.3832C15.01 16.4932 14.11 17.3832 13.01 17.3832H10C9.45001 17.3832 9.00001 16.9332 9.00001 16.3832C9.00001 15.8332 9.45001 15.3832 10 15.3832H13.01L13 13.3832H12C11.45 13.3832 11 12.9332 11 12.3832C11 11.8332 11.45 11.3832 12 11.3832H13L13.01 9.38318H10C9.45001 9.38318 9.01001 8.93318 9.01001 8.38318C9.01001 7.83318 9.45001 7.38318 10 7.38318H13.01C14.11 7.38318 15.01 8.28318 15.01 9.38318V10.8832Z"
        fill={colorCode}
      />
    </svg>
  );
}
