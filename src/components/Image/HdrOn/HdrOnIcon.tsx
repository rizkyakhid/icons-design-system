import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IHdrOnIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function HdrOnIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IHdrOnIconProps) {
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
        d="M7.25 9.38318C6.84 9.38318 6.5 9.72318 6.5 10.1332V11.3832H4.5V10.1332C4.5 9.72318 4.16 9.38318 3.75 9.38318C3.34 9.38318 3 9.72318 3 10.1332V14.6332C3 15.0432 3.34 15.3832 3.75 15.3832C4.16 15.3832 4.5 15.0432 4.5 14.6332V12.8832H6.5V14.6332C6.5 15.0432 6.84 15.3832 7.25 15.3832C7.66 15.3832 8 15.0432 8 14.6332V10.1332C8 9.72318 7.66 9.38318 7.25 9.38318ZM21 11.8832V10.8832C21 10.0532 20.33 9.38318 19.5 9.38318H17C16.45 9.38318 16 9.83318 16 10.3832V14.6332C16 15.0432 16.34 15.3832 16.75 15.3832C17.16 15.3832 17.5 15.0432 17.5 14.6332V13.3832H18.6L19.32 14.9732C19.43 15.2232 19.68 15.3832 19.95 15.3832C20.45 15.3832 20.78 14.8732 20.59 14.4232L20.1 13.2832C20.6 12.9832 21 12.4832 21 11.8832ZM17.5 11.8832V10.8832H19.5V11.8832H17.5ZM13 9.38318H10C9.72 9.38318 9.5 9.60318 9.5 9.88318V14.8832C9.5 15.1632 9.72 15.3832 10 15.3832H13C13.82 15.3832 14.5 14.7032 14.5 13.8832V10.8832C14.5 10.0632 13.82 9.38318 13 9.38318ZM13 13.8832H11V10.8832H13V13.8832Z"
        fill={colorCode}
      />
    </svg>
  );
}
