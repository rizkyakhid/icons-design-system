import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMonochromePhotosIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MonochromePhotosIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMonochromePhotosIconProps) {
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
        d="M20 5.38318H16.8L15.6 4.04318C15.22 3.62318 14.68 3.38318 14.11 3.38318H9.89C9.32 3.38318 8.78 3.62318 8.4 4.04318L7.2 5.38318H4C2.9 5.38318 2 6.28318 2 7.38318V19.3832C2 20.4832 2.9 21.3832 4 21.3832H20C21.1 21.3832 22 20.4832 22 19.3832V7.38318C22 6.28318 21.1 5.38318 20 5.38318ZM20 18.3832C20 18.9332 19.55 19.3832 19 19.3832H12V18.3832C9.2 18.3832 7 16.1832 7 13.3832C7 10.5832 9.2 8.38318 12 8.38318V7.38318H19C19.55 7.38318 20 7.83318 20 8.38318V18.3832ZM17 13.3832C17 10.5832 14.8 8.38318 12 8.38318V10.1832C13.8 10.1832 15.2 11.5832 15.2 13.3832C15.2 15.1832 13.8 16.5832 12 16.5832V18.3832C14.8 18.3832 17 16.1832 17 13.3832ZM8.8 13.3832C8.8 15.1832 10.2 16.5832 12 16.5832V10.1832C10.2 10.1832 8.8 11.5832 8.8 13.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
