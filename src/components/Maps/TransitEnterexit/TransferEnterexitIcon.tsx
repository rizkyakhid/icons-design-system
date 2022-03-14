import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITransferEnterexitIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TransferEnterexitIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITransferEnterexitIconProps) {
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
        d="M14.5 18.3833H8C6.9 18.3833 6 17.4833 6 16.3833V9.88332C6 9.05332 6.67 8.38332 7.5 8.38332C8.33 8.38332 9 9.05332 9 9.88332V13.1533L14.95 7.38332C15.52 6.83332 16.43 6.84332 16.99 7.40332C17.55 7.96332 17.55 8.87332 17 9.44332L11.15 15.3833H14.5C15.33 15.3833 16 16.0533 16 16.8833C16 17.7133 15.33 18.3833 14.5 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
