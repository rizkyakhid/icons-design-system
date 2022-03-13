import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IGradientIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function GradientIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IGradientIconProps) {
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
        d="M11 9.38318H13V11.3832H11V9.38318ZM9 11.3832H11V13.3832H9V11.3832ZM13 11.3832H15V13.3832H13V11.3832ZM15 9.38318H17V11.3832H15V9.38318ZM7 9.38318H9V11.3832H7V9.38318ZM19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM9 18.3832H7V16.3832H9V18.3832ZM13 18.3832H11V16.3832H13V18.3832ZM17 18.3832H15V16.3832H17V18.3832ZM19 11.3832H17V13.3832H19V15.3832H17V13.3832H15V15.3832H13V13.3832H11V15.3832H9V13.3832H7V15.3832H5V13.3832H7V11.3832H5V6.38318C5 5.83318 5.45 5.38318 6 5.38318H18C18.55 5.38318 19 5.83318 19 6.38318V11.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
