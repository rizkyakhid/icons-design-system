import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAssistantPhotoIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AssistantPhotoIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAssistantPhotoIconProps) {
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
        d="M14.4 6.38318L14.16 5.18318C14.07 4.72318 13.66 4.38318 13.18 4.38318H6C5.45 4.38318 5 4.83318 5 5.38318V20.3832C5 20.9332 5.45 21.3832 6 21.3832C6.55 21.3832 7 20.9332 7 20.3832V14.3832H12.6L12.84 15.5832C12.93 16.0532 13.34 16.3832 13.82 16.3832H19C19.55 16.3832 20 15.9332 20 15.3832V7.38318C20 6.83318 19.55 6.38318 19 6.38318H14.4Z"
        fill={colorCode}
      />
    </svg>
  );
}
