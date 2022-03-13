import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILooksIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LooksIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILooksIconProps) {
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
        d="M12 10.3832C8.52999 10.3832 5.63999 12.9232 5.08999 16.2432C4.98999 16.8432 5.47999 17.3832 6.08999 17.3832C6.57999 17.3832 6.98999 17.0232 7.06999 16.5332C7.47999 14.1732 9.52999 12.3832 12 12.3832C14.47 12.3832 16.52 14.1732 16.93 16.5332C17.01 17.0232 17.42 17.3832 17.91 17.3832C18.52 17.3832 19 16.8432 18.9 16.2432C18.36 12.9232 15.47 10.3832 12 10.3832ZM12 6.38318C6.29999 6.38318 1.60999 10.7232 1.04999 16.2832C0.999986 16.8732 1.45999 17.3832 2.05999 17.3832C2.56999 17.3832 2.99999 17.0032 3.04999 16.5032C3.48999 11.9532 7.33999 8.38318 12 8.38318C16.66 8.38318 20.51 11.9532 20.96 16.5032C21.01 17.0032 21.44 17.3832 21.95 17.3832C22.54 17.3832 23.01 16.8732 22.95 16.2832C22.39 10.7232 17.7 6.38318 12 6.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
