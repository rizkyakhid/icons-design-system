import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IGridOffIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function GridOffIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IGridOffIconProps) {
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
        d="M7.99998 4.38318V5.27318L9.99998 7.27318V4.38318H14V8.38318H11.11L13.11 10.3832H14V11.2732L16 13.2732V10.3832H20V14.3832H17.11L19.11 16.3832H20V17.2732L22 19.2732V4.38318C22 3.28318 21.1 2.38318 20 2.38318H5.10998L7.10998 4.38318H7.99998ZM16 4.38318H19C19.55 4.38318 20 4.83318 20 5.38318V8.38318H16V4.38318ZM22.16 22.2632L2.11998 2.22318C1.72998 1.83318 1.09998 1.83318 0.70998 2.22318C0.31998 2.61318 0.31998 3.24318 0.70998 3.63318L1.99998 4.93318V20.3832C1.99998 21.4832 2.89998 22.3832 3.99998 22.3832H19.45L20.75 23.6832C21.14 24.0732 21.77 24.0732 22.16 23.6832C22.55 23.2932 22.55 22.6532 22.16 22.2632ZM9.99998 12.9332L11.45 14.3832H9.99998V12.9332ZM3.99998 6.93318L5.44998 8.38318H3.99998V6.93318ZM7.99998 20.3832H4.99998C4.44998 20.3832 3.99998 19.9332 3.99998 19.3832V16.3832H7.99998V20.3832ZM7.99998 14.3832H3.99998V10.3832H7.44998L7.99998 10.9332V14.3832ZM14 20.3832H9.99998V16.3832H13.45L14 16.9332V20.3832ZM16 20.3832V18.9332L17.45 20.3832H16Z"
        fill={colorCode}
      />
    </svg>
  );
}
