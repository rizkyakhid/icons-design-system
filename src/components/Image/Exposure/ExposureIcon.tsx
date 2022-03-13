import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IExposureIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ExposureIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IExposureIconProps) {
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
        d="M19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318ZM6.75 7.38318H10.25C10.66 7.38318 11 7.72318 11 8.13318C11 8.54318 10.66 8.88318 10.25 8.88318H6.75C6.34 8.88318 6 8.54318 6 8.13318C6 7.72318 6.34 7.38318 6.75 7.38318ZM18 19.3832H5L19 5.38318V18.3832C19 18.9332 18.55 19.3832 18 19.3832ZM14.5 16.3832V17.6332C14.5 18.0432 14.84 18.3832 15.25 18.3832C15.66 18.3832 16 18.0432 16 17.6332V16.3832H17.25C17.66 16.3832 18 16.0432 18 15.6332C18 15.2232 17.66 14.8832 17.25 14.8832H16V13.6332C16 13.2232 15.66 12.8832 15.25 12.8832C14.84 12.8832 14.5 13.2232 14.5 13.6332V14.8832H13.25C12.84 14.8832 12.5 15.2232 12.5 15.6332C12.5 16.0432 12.84 16.3832 13.25 16.3832H14.5Z"
        fill={colorCode}
      />
    </svg>
  );
}
