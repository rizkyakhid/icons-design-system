import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFilterVintageIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FilterVintageIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFilterVintageIconProps) {
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
        d="M18.7 12.7832C18.42 12.6232 18.13 12.4932 17.84 12.3832C18.13 12.2732 18.42 12.1432 18.7 11.9832C20.62 10.8732 21.69 8.86318 21.7 6.79318C19.91 5.76318 17.63 5.68318 15.7 6.79318C15.42 6.95318 15.16 7.14318 14.92 7.33318C14.97 7.02318 15 6.70318 15 6.38318C15 4.16318 13.79 2.23318 12 1.19318C10.21 2.23318 8.99999 4.16318 8.99999 6.38318C8.99999 6.70318 9.02999 7.02318 9.07999 7.33318C8.83999 7.13318 8.57999 6.94318 8.29999 6.78318C6.37999 5.67318 4.09999 5.75318 2.29999 6.78318C2.29999 8.85318 3.36999 10.8632 5.29999 11.9732C5.57999 12.1332 5.86999 12.2632 6.15999 12.3732C5.86999 12.4832 5.57999 12.6132 5.29999 12.7732C3.37999 13.8832 2.30999 15.8932 2.29999 17.9632C4.08999 18.9932 6.36999 19.0732 8.29999 17.9632C8.57999 17.8032 8.83999 17.6132 9.07999 17.4232C9.02999 17.7432 8.99999 18.0632 8.99999 18.3832C8.99999 20.6032 10.21 22.5332 12 23.5732C13.79 22.5332 15 20.6032 15 18.3832C15 18.0632 14.97 17.7432 14.92 17.4332C15.16 17.6332 15.42 17.8132 15.7 17.9732C17.62 19.0832 19.9 19.0032 21.7 17.9732C21.69 15.9032 20.62 13.8932 18.7 12.7832ZM12 16.3832C9.78999 16.3832 7.99999 14.5932 7.99999 12.3832C7.99999 10.1732 9.78999 8.38318 12 8.38318C14.21 8.38318 16 10.1732 16 12.3832C16 14.5932 14.21 16.3832 12 16.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
