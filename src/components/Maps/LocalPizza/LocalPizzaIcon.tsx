import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ILocalPizzaIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LocalPizzaIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ILocalPizzaIconProps) {
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
        d="M12 2.3833C9.00999 2.3833 6.27999 3.4633 4.16999 5.2633C3.45999 5.8733 3.30999 6.9133 3.76999 7.7233L11.13 20.8333C11.51 21.5133 12.49 21.5133 12.87 20.8333L20.23 7.7233C20.69 6.9133 20.54 5.8633 19.83 5.2633C17.73 3.4733 14.99 2.3833 12 2.3833ZM6.99999 7.3833C6.99999 6.2833 7.89999 5.3833 8.99999 5.3833C10.1 5.3833 11 6.2833 11 7.3833C11 8.4833 10.1 9.3833 8.99999 9.3833C7.89999 9.3833 6.99999 8.4833 6.99999 7.3833ZM12 15.3833C10.9 15.3833 9.99999 14.4833 9.99999 13.3833C9.99999 12.2833 10.9 11.3833 12 11.3833C13.1 11.3833 14 12.2833 14 13.3833C14 14.4833 13.1 15.3833 12 15.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
