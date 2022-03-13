import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IIsoIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function IsoIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IIsoIconProps) {
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
        d="M19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM6.25 7.88318H7.5V6.63318C7.5 6.22318 7.84 5.88318 8.25 5.88318C8.66 5.88318 9 6.22318 9 6.63318V7.88318H10.25C10.66 7.88318 11 8.22318 11 8.63318C11 9.04318 10.66 9.38318 10.25 9.38318H9V10.6332C9 11.0432 8.66 11.3832 8.25 11.3832C7.84 11.3832 7.5 11.0432 7.5 10.6332V9.38318H6.25C5.84 9.38318 5.5 9.04318 5.5 8.63318C5.5 8.22318 5.84 7.88318 6.25 7.88318ZM18 19.3832H5L19 5.38318V18.3832C19 18.9332 18.55 19.3832 18 19.3832ZM17 16.6332C17 16.2232 16.66 15.8832 16.25 15.8832H12.75C12.34 15.8832 12 16.2232 12 16.6332C12 17.0432 12.34 17.3832 12.75 17.3832H16.25C16.66 17.3832 17 17.0432 17 16.6332Z"
        fill={colorCode}
      />
    </svg>
  );
}
