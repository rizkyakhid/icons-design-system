import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalPharmacyIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalPharmacyIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalPharmacyIconProps) {
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
        d="M18.89 5.3833H18.36L19.07 3.4133C19.31 2.7633 18.97 2.0433 18.32 1.8133C17.67 1.5733 16.95 1.9133 16.71 2.5633L15.69 5.3833H5.10004C3.73004 5.3833 2.77004 6.7233 3.20004 8.0133L5.00004 13.3833L3.21004 18.7533C2.77004 20.0433 3.74004 21.3833 5.10004 21.3833H18.88C20.24 21.3833 21.21 20.0433 20.78 18.7533L19 13.3833L20.78 8.0133C21.21 6.7233 20.25 5.3833 18.89 5.3833ZM15 14.3833H13V16.3833C13 16.9333 12.55 17.3833 12 17.3833C11.45 17.3833 11 16.9333 11 16.3833V14.3833H9.00004C8.45004 14.3833 8.00004 13.9333 8.00004 13.3833C8.00004 12.8333 8.45004 12.3833 9.00004 12.3833H11V10.3833C11 9.8333 11.45 9.3833 12 9.3833C12.55 9.3833 13 9.8333 13 10.3833V12.3833H15C15.55 12.3833 16 12.8333 16 13.3833C16 13.9333 15.55 14.3833 15 14.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
