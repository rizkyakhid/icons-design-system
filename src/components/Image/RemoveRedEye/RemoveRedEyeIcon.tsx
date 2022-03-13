import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IRemoveRedEyeIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function RemoveRedEyeIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IRemoveRedEyeIconProps) {
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
        d="M12 4.88318C7 4.88318 2.73 7.99318 1 12.3832C2.73 16.7732 7 19.8832 12 19.8832C17 19.8832 21.27 16.7732 23 12.3832C21.27 7.99318 17 4.88318 12 4.88318ZM12 17.3832C9.24 17.3832 7 15.1432 7 12.3832C7 9.62318 9.24 7.38318 12 7.38318C14.76 7.38318 17 9.62318 17 12.3832C17 15.1432 14.76 17.3832 12 17.3832ZM12 9.38318C10.34 9.38318 9 10.7232 9 12.3832C9 14.0432 10.34 15.3832 12 15.3832C13.66 15.3832 15 14.0432 15 12.3832C15 10.7232 13.66 9.38318 12 9.38318Z"
        fill={colorCode}
      />
    </svg>
  );
}
