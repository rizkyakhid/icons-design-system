import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ISwitchVideoIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SwitchVideoIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ISwitchVideoIconProps) {
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
        d="M18 9.88318V6.38318C18 5.83318 17.55 5.38318 17 5.38318H3C2.45 5.38318 2 5.83318 2 6.38318V18.3832C2 18.9332 2.45 19.3832 3 19.3832H17C17.55 19.3832 18 18.9332 18 18.3832V14.8832L20.29 17.1732C20.92 17.8032 22 17.3532 22 16.4632V8.29318C22 7.40318 20.92 6.95318 20.29 7.58318L18 9.88318ZM13 15.8832V13.3832H7V15.8832L3.85 12.7332C3.65 12.5332 3.65 12.2232 3.85 12.0232L7 8.88318V11.3832H13V8.88318L16.15 12.0332C16.35 12.2332 16.35 12.5432 16.15 12.7432L13 15.8832Z"
        fill={colorCode}
      />
    </svg>
  );
}
