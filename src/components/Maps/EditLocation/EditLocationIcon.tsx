import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IEditLocationIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function EditLocationIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IEditLocationIconProps) {
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
      <g clip-path="url(#clip0_73_4784)">
        <path
          d="M18.11 2.15331L19.07 1.19331C19.1625 1.1006 19.2724 1.02706 19.3934 0.976875C19.5143 0.926694 19.644 0.900864 19.775 0.900864C19.906 0.900864 20.0357 0.926694 20.1566 0.976875C20.2776 1.02706 20.3875 1.1006 20.48 1.19331L21.19 1.90331C21.58 2.29331 21.58 2.92331 21.19 3.31331L20.23 4.27331L18.11 2.15331ZM17.11 3.15331L19.23 5.27331L13.26 11.2433C13.1671 11.3366 13.0417 11.3904 12.91 11.3933H11.5C11.22 11.3933 11 11.1733 11 10.8933V9.48331C11 9.35331 11.05 9.22331 11.15 9.13331L17.11 3.15331ZM15.13 3.02331L9.79 8.36331C9.61 8.55331 9.5 8.80331 9.5 9.07331V11.9033C9.5 12.4533 9.95 12.9033 10.5 12.9033H13.33C13.6 12.9033 13.85 12.7933 14.04 12.6133L19.37 7.28331C19.77 8.26331 20 9.37331 20 10.5933C20 13.7733 17.55 17.5133 12.66 21.8233C12.28 22.1533 11.71 22.1533 11.33 21.8233C6.45 17.5133 4 13.7733 4 10.5933C4 5.61331 7.8 2.39331 12 2.39331C13.09 2.39331 14.16 2.61331 15.13 3.02331Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_4784">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.383301)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
