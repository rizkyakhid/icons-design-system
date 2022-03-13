import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IFlipCameraAndroidIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function FlipCameraAndroidIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IFlipCameraAndroidIconProps) {
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
        d="M9 12.3832C9 14.0432 10.34 15.3832 12 15.3832C13.66 15.3832 15 14.0432 15 12.3832C15 10.7232 13.66 9.38318 12 9.38318C10.34 9.38318 9 10.7232 9 12.3832Z"
        fill={colorCode}
      />
      <path
        d="M8 9.38318C8 8.83318 7.55 8.38318 7 8.38318H5.09C6.47 5.99318 9.05 4.38318 12 4.38318C15.49 4.38318 18.45 6.62318 19.54 9.74318C19.68 10.1332 20.07 10.3832 20.48 10.3832C21.16 10.3832 21.66 9.71318 21.44 9.07318C20.07 5.17318 16.36 2.38318 12 2.38318C8.73 2.38318 5.82 3.96318 4 6.39318V5.38318C4 4.83318 3.55 4.38318 3 4.38318C2.45 4.38318 2 4.83318 2 5.38318V9.38318C2 9.93318 2.45 10.3832 3 10.3832H7C7.55 10.3832 8 9.93318 8 9.38318Z"
        fill={colorCode}
      />
      <path
        d="M16 15.3832C16 15.9332 16.45 16.3832 17 16.3832H18.91C17.53 18.7732 14.95 20.3832 12 20.3832C8.51001 20.3832 5.55001 18.1432 4.46001 15.0232C4.32001 14.6332 3.93001 14.3832 3.52001 14.3832C2.84001 14.3832 2.34001 15.0532 2.56001 15.6932C3.93001 19.5932 7.64001 22.3832 12 22.3832C15.27 22.3832 18.18 20.8032 20 18.3732V19.3832C20 19.9332 20.45 20.3832 21 20.3832C21.55 20.3832 22 19.9332 22 19.3832V15.3832C22 14.8332 21.55 14.3832 21 14.3832H17C16.45 14.3832 16 14.8332 16 15.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
