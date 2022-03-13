import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IPanoramaWideAngleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PanoramaWideAngleIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IPanoramaWideAngleIconProps) {
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
        d="M12 6.38318C14.45 6.38318 16.71 6.58318 19.29 7.02318C19.76 8.80318 20 10.6032 20 12.3832C20 14.1632 19.76 15.9632 19.29 17.7432C16.71 18.1832 14.45 18.3832 12 18.3832C9.55 18.3832 7.29 18.1832 4.71 17.7432C4.24 15.9632 4 14.1632 4 12.3832C4 10.6032 4.24 8.80318 4.71 7.02318C7.29 6.58318 9.55 6.38318 12 6.38318ZM12 4.38318C9.27 4.38318 6.78 4.62318 4.05 5.10318L3.12 5.26318L2.87 6.16318C2.29 8.23318 2 10.3132 2 12.3832C2 14.4532 2.29 16.5332 2.87 18.6032L3.12 19.4932L4.05 19.6532C6.78 20.1432 9.27 20.3832 12 20.3832C14.73 20.3832 17.22 20.1432 19.95 19.6632L20.88 19.5032L21.13 18.6132C21.71 16.5332 22 14.4532 22 12.3832C22 10.3132 21.71 8.23318 21.13 6.16318L20.88 5.27318L19.95 5.11318C17.22 4.62318 14.73 4.38318 12 4.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
