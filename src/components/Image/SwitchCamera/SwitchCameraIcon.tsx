import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ISwitchCameraIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SwitchCameraIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ISwitchCameraIconProps) {
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
        d="M20 4.38318H16.83L15.59 3.03318C15.22 2.62318 14.68 2.38318 14.12 2.38318H9.88C9.32 2.38318 8.78 2.62318 8.4 3.03318L7.17 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318V18.3832C2 19.4832 2.9 20.3832 4 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832V6.38318C22 5.28318 21.1 4.38318 20 4.38318ZM15 15.8832V13.3832H9V15.8832L5.85 12.7332C5.65 12.5332 5.65 12.2232 5.85 12.0232L9 8.88318V11.3832H15V8.88318L18.15 12.0332C18.35 12.2332 18.35 12.5432 18.15 12.7432L15 15.8832Z"
        fill={colorCode}
      />
    </svg>
  );
}
