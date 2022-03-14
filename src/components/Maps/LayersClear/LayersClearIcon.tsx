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
        d="M19.99 10.1733C20.5 9.77329 20.5 8.99329 19.99 8.59329L13.23 3.33329C12.51 2.77329 11.5 2.77329 10.77 3.33329L9.40998 4.40329L17.29 12.2833L19.99 10.1733ZM19.99 13.6633L19.98 13.6533C19.62 13.3733 19.12 13.3733 18.76 13.6533L18.71 13.6933L20.11 15.0933C20.48 14.6833 20.45 14.0233 19.99 13.6633ZM21.44 19.2633L4.11998 1.94329C3.72998 1.55329 3.09998 1.55329 2.70998 1.94329C2.31998 2.33329 2.31998 2.96329 2.70998 3.35329L6.22998 6.87329L4.00998 8.59329C3.49998 8.99329 3.49998 9.77329 4.00998 10.1733L10.77 15.4333C11.49 15.9933 12.5 15.9933 13.23 15.4333L14.1 14.7533L15.52 16.1733L12.6 18.4433C12.24 18.7233 11.73 18.7233 11.37 18.4433L5.21998 13.6633C4.85998 13.3833 4.35998 13.3833 3.99998 13.6633C3.48998 14.0633 3.48998 14.8333 3.99998 15.2333L10.76 20.4933C11.48 21.0533 12.49 21.0533 13.22 20.4933L16.94 17.6033L20.01 20.6733C20.4 21.0633 21.03 21.0633 21.42 20.6733C21.83 20.2833 21.83 19.6533 21.44 19.2633Z"
        fill={colorCode}
      />
    </svg>
  );
}
