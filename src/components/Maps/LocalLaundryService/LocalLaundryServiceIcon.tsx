import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalLaundryServiceIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalLaundryServiceIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalLaundryServiceIconProps) {
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
        d="M9.55 16.8333C9.35 17.0333 9.34 17.3833 9.57 17.5633C11.14 18.7633 13.4 18.6433 14.83 17.2133C16.26 15.7833 16.38 13.5233 15.18 11.9533C15 11.7233 14.65 11.7233 14.45 11.9333L9.55 16.8333ZM18 2.3933L6 2.3833C4.89 2.3833 4 3.2733 4 4.3833V20.3833C4 21.4933 4.89 22.3833 6 22.3833H18C19.11 22.3833 20 21.4933 20 20.3833V4.3833C20 3.2733 19.11 2.3933 18 2.3933ZM10 4.3833C10.55 4.3833 11 4.8333 11 5.3833C11 5.9333 10.55 6.3833 10 6.3833C9.45 6.3833 9 5.9333 9 5.3833C9 4.8333 9.45 4.3833 10 4.3833ZM7 4.3833C7.55 4.3833 8 4.8333 8 5.3833C8 5.9333 7.55 6.3833 7 6.3833C6.45 6.3833 6 5.9333 6 5.3833C6 4.8333 6.45 4.3833 7 4.3833ZM12 20.3833C8.69 20.3833 6 17.6933 6 14.3833C6 11.0733 8.69 8.3833 12 8.3833C15.31 8.3833 18 11.0733 18 14.3833C18 17.6933 15.31 20.3833 12 20.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
