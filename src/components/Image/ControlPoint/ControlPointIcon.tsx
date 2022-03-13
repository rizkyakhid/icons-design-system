import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IControlPointIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ControlPointIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IControlPointIconProps) {
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
        d="M12 7.38318C11.45 7.38318 11 7.83318 11 8.38318V11.3832H8C7.45 11.3832 7 11.8332 7 12.3832C7 12.9332 7.45 13.3832 8 13.3832H11V16.3832C11 16.9332 11.45 17.3832 12 17.3832C12.55 17.3832 13 16.9332 13 16.3832V13.3832H16C16.55 13.3832 17 12.9332 17 12.3832C17 11.8332 16.55 11.3832 16 11.3832H13V8.38318C13 7.83318 12.55 7.38318 12 7.38318ZM12 2.38318C6.49 2.38318 2 6.87318 2 12.3832C2 17.8932 6.49 22.3832 12 22.3832C17.51 22.3832 22 17.8932 22 12.3832C22 6.87318 17.51 2.38318 12 2.38318ZM12 20.3832C7.59 20.3832 4 16.7932 4 12.3832C4 7.97318 7.59 4.38318 12 4.38318C16.41 4.38318 20 7.97318 20 12.3832C20 16.7932 16.41 20.3832 12 20.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
