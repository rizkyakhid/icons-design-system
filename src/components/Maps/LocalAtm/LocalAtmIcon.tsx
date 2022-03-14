import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalAtmIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalAtmIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalAtmIconProps) {
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
        d="M20 4.3833H4C2.89 4.3833 2.01 5.2733 2.01 6.3833L2 18.3833C2 19.4933 2.89 20.3833 4 20.3833H20C21.11 20.3833 22 19.4933 22 18.3833V6.3833C22 5.2733 21.11 4.3833 20 4.3833ZM20 17.3833C20 17.9333 19.55 18.3833 19 18.3833H5C4.45 18.3833 4 17.9333 4 17.3833V7.3833C4 6.8333 4.45 6.3833 5 6.3833H19C19.55 6.3833 20 6.8333 20 7.3833V17.3833ZM14 10.3833C14.55 10.3833 15 9.9333 15 9.3833C15 8.8333 14.55 8.3833 14 8.3833H13V8.3733C13 7.8233 12.55 7.3733 12 7.3733C11.45 7.3733 11 7.8233 11 8.3733V8.3833H10C9.45 8.3833 9 8.8333 9 9.3833V12.3833C9 12.9333 9.45 13.3833 10 13.3833H13V14.3833H10C9.45 14.3833 9 14.8333 9 15.3833C9 15.9333 9.45 16.3833 10 16.3833H11C11 16.9333 11.45 17.3833 12 17.3833C12.55 17.3833 13 16.9333 13 16.3833H14C14.55 16.3833 15 15.9333 15 15.3833V12.3833C15 11.8333 14.55 11.3833 14 11.3833H11V10.3833H14Z"
        fill={colorCode}
      />
    </svg>
  );
}
