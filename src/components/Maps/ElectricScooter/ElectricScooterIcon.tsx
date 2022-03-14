import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IElectricScooterIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ElectricScooterIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IElectricScooterIconProps) {
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
        d="M7.82006 16.3833H15.0001V15.3833C15.0001 13.1733 16.7901 11.3833 19.0001 11.3833H19.7401L17.8401 2.9433C17.6301 2.0333 16.8201 1.3833 15.8901 1.3833H13.0001C12.4501 1.3833 12.0001 1.8333 12.0001 2.3833C12.0001 2.9333 12.4501 3.3833 13.0001 3.3833H15.8901L17.2901 9.6333H17.2801C15.1201 10.2833 13.4701 12.1133 13.0901 14.3833H7.82006C7.34006 13.0433 5.96006 12.1433 4.40006 12.4433C3.22006 12.6733 2.27006 13.6433 2.05006 14.8233C1.70006 16.7233 3.16006 18.3833 5.00006 18.3833C6.30006 18.3833 7.40006 17.5433 7.82006 16.3833ZM5.00006 16.3833C4.45006 16.3833 4.00006 15.9333 4.00006 15.3833C4.00006 14.8333 4.45006 14.3833 5.00006 14.3833C5.55006 14.3833 6.00006 14.8333 6.00006 15.3833C6.00006 15.9333 5.55006 16.3833 5.00006 16.3833Z"
        fill={colorCode}
      />
      <path
        d="M19 12.3833C17.34 12.3833 16 13.7233 16 15.3833C16 17.0433 17.34 18.3833 19 18.3833C20.66 18.3833 22 17.0433 22 15.3833C22 13.7233 20.66 12.3833 19 12.3833ZM19 16.3833C18.45 16.3833 18 15.9333 18 15.3833C18 14.8333 18.45 14.3833 19 14.3833C19.55 14.3833 20 14.8333 20 15.3833C20 15.9333 19.55 16.3833 19 16.3833Z"
        fill={colorCode}
      />
      <path
        d="M11 20.3833H7L13 23.3833V21.3833H17L11 18.3833V20.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
