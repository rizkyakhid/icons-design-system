import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IStyleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function StyleIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IStyleIconProps) {
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
        d="M2.52998 20.0332L3.86998 20.5932V11.5632L1.43998 17.4232C1.02998 18.4432 1.51998 19.6132 2.52998 20.0332V20.0332ZM22.03 16.3332L17.07 4.36318C16.76 3.61318 16.03 3.15318 15.26 3.13318C15 3.13318 14.73 3.17318 14.47 3.28318L7.09998 6.33318C6.34998 6.64318 5.88998 7.36318 5.86998 8.13318C5.85998 8.40318 5.90998 8.67318 6.01998 8.93318L10.98 20.9032C11.29 21.6632 12.03 22.1232 12.81 22.1332C13.07 22.1332 13.33 22.0832 13.58 21.9832L20.94 18.9332C21.96 18.5132 22.45 17.3432 22.03 16.3332V16.3332ZM7.87998 9.13318C7.32998 9.13318 6.87998 8.68318 6.87998 8.13318C6.87998 7.58318 7.32998 7.13318 7.87998 7.13318C8.42998 7.13318 8.87998 7.58318 8.87998 8.13318C8.87998 8.68318 8.42998 9.13318 7.87998 9.13318V9.13318ZM5.87998 20.1332C5.87998 21.2332 6.77998 22.1332 7.87998 22.1332H9.32998L5.87998 13.7932V20.1332Z"
        fill={colorCode}
      />
    </svg>
  );
}
