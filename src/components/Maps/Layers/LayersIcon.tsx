import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILayersIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LayersIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILayersIconProps) {
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
        d="M12.6001 18.4433C12.2401 18.7233 11.7301 18.7233 11.3701 18.4433L5.22005 13.6633C4.86005 13.3833 4.36005 13.3833 4.00005 13.6633C3.49005 14.0633 3.49005 14.8333 4.00005 15.2333L10.7601 20.4933C11.4801 21.0533 12.4901 21.0533 13.2201 20.4933L19.9801 15.2333C20.4901 14.8333 20.4901 14.0633 19.9801 13.6633L19.9701 13.6533C19.6101 13.3733 19.1101 13.3733 18.7501 13.6533L12.6001 18.4433ZM13.2301 15.4233L19.9901 10.1633C20.5001 9.76329 20.5001 8.98329 19.9901 8.58329L13.2301 3.32329C12.5101 2.76329 11.5001 2.76329 10.7701 3.32329L4.01005 8.59329C3.50005 8.99329 3.50005 9.77329 4.01005 10.1733L10.7701 15.4333C11.4901 15.9933 12.5101 15.9933 13.2301 15.4233Z"
        fill={colorCode}
      />
    </svg>
  );
}
