import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPortraitIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PortraitIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPortraitIconProps) {
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
        d="M12 12.6332C13.24 12.6332 14.25 11.6232 14.25 10.3832C14.25 9.14318 13.24 8.13318 12 8.13318C10.76 8.13318 9.75 9.14318 9.75 10.3832C9.75 11.6232 10.76 12.6332 12 12.6332ZM16.5 16.6332C16.5 15.1332 13.5 14.3832 12 14.3832C10.5 14.3832 7.5 15.1332 7.5 16.6332V17.3832H16.5V16.6332ZM19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM18 19.3832H6C5.45 19.3832 5 18.9332 5 18.3832V6.38318C5 5.83318 5.45 5.38318 6 5.38318H18C18.55 5.38318 19 5.83318 19 6.38318V18.3832C19 18.9332 18.55 19.3832 18 19.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
