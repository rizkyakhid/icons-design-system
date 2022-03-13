import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IBlurLinearIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BlurLinearIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IBlurLinearIconProps) {
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
        d="M5 17.8832C5.83 17.8832 6.5 17.2132 6.5 16.3832C6.5 15.5532 5.83 14.8832 5 14.8832C4.17 14.8832 3.5 15.5532 3.5 16.3832C3.5 17.2132 4.17 17.8832 5 17.8832ZM9 13.3832C9.55 13.3832 10 12.9332 10 12.3832C10 11.8332 9.55 11.3832 9 11.3832C8.45 11.3832 8 11.8332 8 12.3832C8 12.9332 8.45 13.3832 9 13.3832ZM9 9.38318C9.55 9.38318 10 8.93318 10 8.38318C10 7.83318 9.55 7.38318 9 7.38318C8.45 7.38318 8 7.83318 8 8.38318C8 8.93318 8.45 9.38318 9 9.38318ZM4 21.3832H20C20.55 21.3832 21 20.9332 21 20.3832C21 19.8332 20.55 19.3832 20 19.3832H4C3.45 19.3832 3 19.8332 3 20.3832C3 20.9332 3.45 21.3832 4 21.3832ZM5 9.88318C5.83 9.88318 6.5 9.21318 6.5 8.38318C6.5 7.55318 5.83 6.88318 5 6.88318C4.17 6.88318 3.5 7.55318 3.5 8.38318C3.5 9.21318 4.17 9.88318 5 9.88318ZM5 13.8832C5.83 13.8832 6.5 13.2132 6.5 12.3832C6.5 11.5532 5.83 10.8832 5 10.8832C4.17 10.8832 3.5 11.5532 3.5 12.3832C3.5 13.2132 4.17 13.8832 5 13.8832ZM9 17.3832C9.55 17.3832 10 16.9332 10 16.3832C10 15.8332 9.55 15.3832 9 15.3832C8.45 15.3832 8 15.8332 8 16.3832C8 16.9332 8.45 17.3832 9 17.3832ZM17 16.8832C17.28 16.8832 17.5 16.6632 17.5 16.3832C17.5 16.1032 17.28 15.8832 17 15.8832C16.72 15.8832 16.5 16.1032 16.5 16.3832C16.5 16.6632 16.72 16.8832 17 16.8832ZM3 4.38318C3 4.93318 3.45 5.38318 4 5.38318H20C20.55 5.38318 21 4.93318 21 4.38318C21 3.83318 20.55 3.38318 20 3.38318H4C3.45 3.38318 3 3.83318 3 4.38318ZM17 8.88318C17.28 8.88318 17.5 8.66318 17.5 8.38318C17.5 8.10318 17.28 7.88318 17 7.88318C16.72 7.88318 16.5 8.10318 16.5 8.38318C16.5 8.66318 16.72 8.88318 17 8.88318ZM17 12.8832C17.28 12.8832 17.5 12.6632 17.5 12.3832C17.5 12.1032 17.28 11.8832 17 11.8832C16.72 11.8832 16.5 12.1032 16.5 12.3832C16.5 12.6632 16.72 12.8832 17 12.8832ZM13 9.38318C13.55 9.38318 14 8.93318 14 8.38318C14 7.83318 13.55 7.38318 13 7.38318C12.45 7.38318 12 7.83318 12 8.38318C12 8.93318 12.45 9.38318 13 9.38318ZM13 13.3832C13.55 13.3832 14 12.9332 14 12.3832C14 11.8332 13.55 11.3832 13 11.3832C12.45 11.3832 12 11.8332 12 12.3832C12 12.9332 12.45 13.3832 13 13.3832ZM13 17.3832C13.55 17.3832 14 16.9332 14 16.3832C14 15.8332 13.55 15.3832 13 15.3832C12.45 15.3832 12 15.8332 12 16.3832C12 16.9332 12.45 17.3832 13 17.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
