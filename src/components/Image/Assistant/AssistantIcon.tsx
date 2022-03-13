import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAssistantIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AssistantIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAssistantIconProps) {
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
        d="M19 2.38318H5C3.9 2.38318 3 3.28318 3 4.38318V18.3832C3 19.4832 3.9 20.3832 5 20.3832H9L11.29 22.6732C11.68 23.0632 12.31 23.0632 12.7 22.6732L15 20.3832H19C20.1 20.3832 21 19.4832 21 18.3832V4.38318C21 3.28318 20.1 2.38318 19 2.38318ZM13.88 13.2632L12 17.3832L10.12 13.2632L6 11.3832L10.12 9.50318L12 5.38318L13.88 9.50318L18 11.3832L13.88 13.2632Z"
        fill={colorCode}
      />
    </svg>
  );
}
