import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITonalityIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TonalityIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITonalityIconProps) {
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
        d="M12 2.38318C6.48 2.38318 2 6.86318 2 12.3832C2 17.9032 6.48 22.3832 12 22.3832C17.52 22.3832 22 17.9032 22 12.3832C22 6.86318 17.52 2.38318 12 2.38318ZM11 20.3132C7.06 19.8232 4 16.4632 4 12.3832C4 8.30318 7.05 4.94318 11 4.45318V20.3132ZM13 4.45318C14.03 4.58318 15 4.90318 15.87 5.38318H13V4.45318ZM13 7.38318H18.24C18.49 7.69318 18.72 8.03318 18.92 8.38318H13V7.38318ZM13 10.3832H19.74C19.82 10.7132 19.89 11.0432 19.93 11.3832H13V10.3832ZM13 20.3132V19.3832H15.87C15 19.8632 14.03 20.1832 13 20.3132ZM18.24 17.3832H13V16.3832H18.92C18.72 16.7332 18.49 17.0732 18.24 17.3832V17.3832ZM19.74 14.3832H13V13.3832H19.93C19.89 13.7232 19.82 14.0532 19.74 14.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
