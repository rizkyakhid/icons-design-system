import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalHospitalIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalHospitalIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalHospitalIconProps) {
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
        d="M19 3.3833H5C3.9 3.3833 3.01 4.2833 3.01 5.3833L3 19.3833C3 20.4833 3.9 21.3833 5 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V5.3833C21 4.2833 20.1 3.3833 19 3.3833ZM17 14.3833H14V17.3833C14 17.9333 13.55 18.3833 13 18.3833H11C10.45 18.3833 10 17.9333 10 17.3833V14.3833H7C6.45 14.3833 6 13.9333 6 13.3833V11.3833C6 10.8333 6.45 10.3833 7 10.3833H10V7.3833C10 6.8333 10.45 6.3833 11 6.3833H13C13.55 6.3833 14 6.8333 14 7.3833V10.3833H17C17.55 10.3833 18 10.8333 18 11.3833V13.3833C18 13.9333 17.55 14.3833 17 14.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
