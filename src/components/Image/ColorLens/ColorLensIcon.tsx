import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IColorLensIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ColorLensIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IColorLensIconProps) {
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
        d="M12 3.38318C7.03 3.38318 3 7.41318 3 12.3832C3 17.3532 7.03 21.3832 12 21.3832C12.83 21.3832 13.5 20.7132 13.5 19.8832C13.5 19.4932 13.35 19.1432 13.11 18.8732C12.88 18.6132 12.73 18.2632 12.73 17.8832C12.73 17.0532 13.4 16.3832 14.23 16.3832H16C18.76 16.3832 21 14.1432 21 11.3832C21 6.96318 16.97 3.38318 12 3.38318ZM6.5 12.3832C5.67 12.3832 5 11.7132 5 10.8832C5 10.0532 5.67 9.38318 6.5 9.38318C7.33 9.38318 8 10.0532 8 10.8832C8 11.7132 7.33 12.3832 6.5 12.3832ZM9.5 8.38318C8.67 8.38318 8 7.71318 8 6.88318C8 6.05318 8.67 5.38318 9.5 5.38318C10.33 5.38318 11 6.05318 11 6.88318C11 7.71318 10.33 8.38318 9.5 8.38318ZM14.5 8.38318C13.67 8.38318 13 7.71318 13 6.88318C13 6.05318 13.67 5.38318 14.5 5.38318C15.33 5.38318 16 6.05318 16 6.88318C16 7.71318 15.33 8.38318 14.5 8.38318ZM17.5 12.3832C16.67 12.3832 16 11.7132 16 10.8832C16 10.0532 16.67 9.38318 17.5 9.38318C18.33 9.38318 19 10.0532 19 10.8832C19 11.7132 18.33 12.3832 17.5 12.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
