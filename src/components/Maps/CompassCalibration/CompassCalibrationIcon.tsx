import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ICompassCalibrationIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CompassCalibrationIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ICompassCalibrationIconProps) {
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
        d="M12 21.3833C14.2091 21.3833 16 19.5924 16 17.3833C16 15.1742 14.2091 13.3833 12 13.3833C9.79086 13.3833 8 15.1742 8 17.3833C8 19.5924 9.79086 21.3833 12 21.3833Z"
        fill={colorCode}
      />
      <path
        d="M12 3.3833C8.49 3.3833 5.28 4.6733 2.8 6.7933C2.36 7.1733 2.32 7.8533 2.74 8.2733L6.34 11.8733C6.7 12.2333 7.26 12.2633 7.66 11.9533C8.86 11.0133 10.37 10.4533 12 10.4533C13.64 10.4533 15.14 11.0133 16.34 11.9433C16.74 12.2533 17.3 12.2233 17.65 11.8633L21.25 8.2633C21.67 7.8433 21.63 7.1633 21.18 6.7833C18.72 4.6633 15.51 3.3833 12 3.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
