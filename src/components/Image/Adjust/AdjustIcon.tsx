import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAdjustIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AdjustIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAdjustIconProps) {
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
        d="M12 2.38318C6.49 2.38318 2 6.87318 2 12.3832C2 17.8932 6.49 22.3832 12 22.3832C17.51 22.3832 22 17.8932 22 12.3832C22 6.87318 17.51 2.38318 12 2.38318ZM12 20.3832C7.59 20.3832 4 16.7932 4 12.3832C4 7.97318 7.59 4.38318 12 4.38318C16.41 4.38318 20 7.97318 20 12.3832C20 16.7932 16.41 20.3832 12 20.3832ZM15 12.3832C15 14.0432 13.66 15.3832 12 15.3832C10.34 15.3832 9 14.0432 9 12.3832C9 10.7232 10.34 9.38318 12 9.38318C13.66 9.38318 15 10.7232 15 12.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
