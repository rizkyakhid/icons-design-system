import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalGroceryStoreIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalGroceryStoreIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalGroceryStoreIconProps) {
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
        d="M7 18.3833C5.9 18.3833 5.01 19.2833 5.01 20.3833C5.01 21.4833 5.9 22.3833 7 22.3833C8.1 22.3833 9 21.4833 9 20.3833C9 19.2833 8.1 18.3833 7 18.3833ZM2 4.3833H3L6.6 11.9733L5.25 14.4133C4.52 15.7533 5.48 17.3833 7 17.3833H18C18.55 17.3833 19 16.9333 19 16.3833C19 15.8333 18.55 15.3833 18 15.3833H7L8.1 13.3833H15.55C16.3 13.3833 16.96 12.9733 17.3 12.3533L20.88 5.8633C21.25 5.2033 20.77 4.3833 20.01 4.3833H5.21L4.54 2.9533C4.38 2.6033 4.02 2.3833 3.64 2.3833H2C1.45 2.3833 1 2.8333 1 3.3833C1 3.9333 1.45 4.3833 2 4.3833ZM17 18.3833C15.9 18.3833 15.01 19.2833 15.01 20.3833C15.01 21.4833 15.9 22.3833 17 22.3833C18.1 22.3833 19 21.4833 19 20.3833C19 19.2833 18.1 18.3833 17 18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
