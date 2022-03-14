import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalFireDepartmentIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalFireDepartmentIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalFireDepartmentIconProps) {
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
        d="M19.48 12.7333C17.91 8.65329 12.32 8.43329 13.67 2.50329C13.77 2.06329 13.3 1.72329 12.92 1.95329C9.29 4.09329 6.68 8.38329 8.87 14.0033C9.05 14.4633 8.51 14.8933 8.12 14.5933C6.31 13.2233 6.12 11.2533 6.28 9.84329C6.34 9.32329 5.66 9.07329 5.37 9.50329C4.69 10.5433 4 12.2233 4 14.7533C4.38 20.3533 9.11 22.0733 10.81 22.2933C13.24 22.6033 15.87 22.1533 17.76 20.4233C19.84 18.4933 20.6 15.4133 19.48 12.7333ZM10.2 17.7633C11.64 17.4133 12.38 16.3733 12.58 15.4533C12.91 14.0233 11.62 12.6233 12.49 10.3633C12.82 12.2333 15.76 13.4033 15.76 15.4433C15.84 17.9733 13.1 20.1433 10.2 17.7633Z"
        fill={colorCode}
      />
      <path
        d="M19.48 12.7333C17.91 8.65329 12.32 8.43329 13.67 2.50329C13.77 2.06329 13.3 1.72329 12.92 1.95329C9.29 4.09329 6.68 8.38329 8.87 14.0033C9.05 14.4633 8.51 14.8933 8.12 14.5933C6.31 13.2233 6.12 11.2533 6.28 9.84329C6.34 9.32329 5.66 9.07329 5.37 9.50329C4.69 10.5433 4 12.2233 4 14.7533C4.38 20.3533 9.11 22.0733 10.81 22.2933C13.24 22.6033 15.87 22.1533 17.76 20.4233C19.84 18.4933 20.6 15.4133 19.48 12.7333ZM10.2 17.7633C11.64 17.4133 12.38 16.3733 12.58 15.4533C12.91 14.0233 11.62 12.6233 12.49 10.3633C12.82 12.2333 15.76 13.4033 15.76 15.4433C15.84 17.9733 13.1 20.1433 10.2 17.7633Z"
        fill={colorCode}
      />
    </svg>
  );
}
