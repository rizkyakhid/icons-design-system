import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFlashOffIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlashOffIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFlashOffIconProps) {
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
        d="M16.12 11.8832C16.51 11.2132 16.03 10.3832 15.26 10.3832H13.39L15.67 12.6632L16.12 11.8832ZM16.28 3.83318C16.61 3.16318 16.13 2.38318 15.38 2.38318H7.99998C7.44998 2.38318 6.99998 2.83318 6.99998 3.38318V3.99318L13.13 10.1232L16.28 3.83318ZM18.44 18.2632L4.11998 3.94318C3.72998 3.55318 3.09998 3.55318 2.70998 3.94318C2.31998 4.33318 2.31998 4.96318 2.70998 5.35318L6.99998 9.65318V12.3832C6.99998 12.9332 7.44998 13.3832 7.99998 13.3832H9.99998V20.5332C9.99998 21.0432 10.67 21.2232 10.93 20.7832L13.58 16.2332L17.02 19.6732C17.41 20.0632 18.04 20.0632 18.43 19.6732C18.83 19.2832 18.83 18.6532 18.44 18.2632Z"
        fill={colorCode}
      />
    </svg>
  );
}
