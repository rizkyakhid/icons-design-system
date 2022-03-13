import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IControlPointDuplicateIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ControlPointDuplicateIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IControlPointDuplicateIconProps) {
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
        d="M15 8.38318C14.45 8.38318 14 8.83318 14 9.38318V11.3832H12C11.45 11.3832 11 11.8332 11 12.3832C11 12.9332 11.45 13.3832 12 13.3832H14V15.3832C14 15.9332 14.45 16.3832 15 16.3832C15.55 16.3832 16 15.9332 16 15.3832V13.3832H18C18.55 13.3832 19 12.9332 19 12.3832C19 11.8332 18.55 11.3832 18 11.3832H16V9.38318C16 8.83318 15.55 8.38318 15 8.38318ZM2 12.3832C2 9.80318 3.4 7.55318 5.48 6.34318C5.8 6.15318 6.01 5.83318 6.01 5.46318C6.01 4.69318 5.17 4.21318 4.5 4.60318C1.82 6.16318 0 9.06318 0 12.3832C0 15.7032 1.82 18.6032 4.5 20.1632C5.17 20.5532 6.01 20.0732 6.01 19.3032C6.01 18.9332 5.8 18.6132 5.48 18.4232C3.4 17.2132 2 14.9632 2 12.3832ZM15 3.38318C10.04 3.38318 6 7.42318 6 12.3832C6 17.3432 10.04 21.3832 15 21.3832C19.96 21.3832 24 17.3432 24 12.3832C24 7.42318 19.96 3.38318 15 3.38318ZM15 19.3832C11.14 19.3832 8 16.2432 8 12.3832C8 8.52318 11.14 5.38318 15 5.38318C18.86 5.38318 22 8.52318 22 12.3832C22 16.2432 18.86 19.3832 15 19.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
