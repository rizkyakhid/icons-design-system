import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IAddBusinessIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function AddBusinessIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IAddBusinessIconProps) {
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
        d="M3 6.3833H16C16.55 6.3833 17 5.9333 17 5.3833C17 4.8333 16.55 4.3833 16 4.3833H3C2.45 4.3833 2 4.8333 2 5.3833C2 5.9333 2.45 6.3833 3 6.3833Z"
        fill={colorCode}
      />
      <path
        d="M15 17.3833H17V14.3833H17.18C17.81 14.3833 18.28 13.8033 18.16 13.1833L17.16 8.1833C17.07 7.7233 16.66 7.3833 16.18 7.3833H2.81995C2.33995 7.3833 1.92995 7.7233 1.83995 8.1833L0.839951 13.1833C0.719951 13.8033 1.18995 14.3833 1.81995 14.3833H1.99995V19.3833C1.99995 19.9333 2.44995 20.3833 2.99995 20.3833H9.99995C10.55 20.3833 11 19.9333 11 19.3833V14.3833H15V17.3833ZM8.99995 18.3833H3.99995V14.3833H8.99995V18.3833Z"
        fill={colorCode}
      />
      <path
        d="M22 18.3833H20V16.3833C20 15.8333 19.55 15.3833 19 15.3833C18.45 15.3833 18 15.8333 18 16.3833V18.3833H16C15.45 18.3833 15 18.8333 15 19.3833C15 19.9333 15.45 20.3833 16 20.3833H18V22.3833C18 22.9333 18.45 23.3833 19 23.3833C19.55 23.3833 20 22.9333 20 22.3833V20.3833H22C22.55 20.3833 23 19.9333 23 19.3833C23 18.8333 22.55 18.3833 22 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
