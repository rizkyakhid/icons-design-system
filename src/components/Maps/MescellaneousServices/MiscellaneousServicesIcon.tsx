import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface IMiscellaneousServicesIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MiscellaneousServicesIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: IMiscellaneousServicesIconProps) {
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
        d="M14.17 14.0933L15.57 11.6733C15.66 11.5233 15.62 11.3333 15.49 11.2233L14.01 10.0633C14.04 9.8433 14.06 9.6133 14.06 9.3833C14.06 9.1533 14.04 8.9233 14.01 8.6933L15.49 7.5333C15.62 7.4233 15.66 7.2333 15.57 7.0833L14.17 4.6633C14.08 4.5133 13.9 4.4533 13.74 4.5133L12 5.2133C11.64 4.9333 11.25 4.7033 10.82 4.5233L10.56 2.6733C10.53 2.5133 10.38 2.3833 10.21 2.3833H7.41C7.24 2.3833 7.09 2.5133 7.06 2.6833L6.8 4.5333C6.38 4.7133 5.98 4.9433 5.62 5.2233L3.88 4.5233C3.72 4.4633 3.54 4.5233 3.45 4.6733L2.05 7.0933C1.96 7.2433 2 7.4333 2.13 7.5433L3.61 8.7033C3.58 8.9233 3.56 9.1533 3.56 9.3833C3.56 9.6133 3.58 9.8433 3.61 10.0733L2.13 11.2333C2 11.3433 1.96 11.5333 2.05 11.6833L3.45 14.1033C3.54 14.2533 3.72 14.3133 3.88 14.2533L5.62 13.5533C5.98 13.8333 6.37 14.0633 6.8 14.2433L7.06 16.0933C7.09 16.2533 7.24 16.3833 7.41 16.3833H10.21C10.38 16.3833 10.53 16.2533 10.56 16.0833L10.82 14.2333C11.24 14.0533 11.64 13.8233 12 13.5433L13.74 14.2433C13.9 14.3033 14.08 14.2433 14.17 14.0933ZM8.81 11.3833C7.71 11.3833 6.81 10.4833 6.81 9.3833C6.81 8.2833 7.71 7.3833 8.81 7.3833C9.91 7.3833 10.81 8.2833 10.81 9.3833C10.81 10.4833 9.91 11.3833 8.81 11.3833Z"
        fill={colorCode}
      />
      <path
        d="M21.92 19.0533L20.96 18.3133C20.98 18.1733 21 18.0233 21 17.8733C21 17.7233 20.99 17.5733 20.96 17.4333L21.91 16.6933C21.99 16.6233 22.02 16.5033 21.96 16.4033L21.06 14.8533C21.01 14.7533 20.89 14.7233 20.78 14.7533L19.67 15.2033C19.44 15.0233 19.19 14.8733 18.91 14.7633L18.74 13.5833C18.73 13.4633 18.63 13.3833 18.53 13.3833H16.74C16.63 13.3833 16.53 13.4633 16.52 13.5733L16.35 14.7533C16.08 14.8733 15.82 15.0133 15.59 15.1933L14.48 14.7433C14.38 14.7033 14.26 14.7433 14.2 14.8433L13.3 16.3933C13.25 16.4933 13.26 16.6133 13.35 16.6833L14.3 17.4233C14.28 17.5633 14.27 17.7133 14.27 17.8633C14.27 18.0133 14.28 18.1633 14.3 18.3033L13.35 19.0433C13.27 19.1133 13.24 19.2333 13.3 19.3333L14.2 20.8833C14.25 20.9833 14.37 21.0133 14.48 20.9833L15.59 20.5333C15.82 20.7133 16.07 20.8633 16.35 20.9733L16.52 22.1533C16.54 22.2633 16.63 22.3433 16.74 22.3433H18.53C18.64 22.3433 18.74 22.2633 18.75 22.1533L18.92 20.9733C19.19 20.8533 19.45 20.7133 19.67 20.5333L20.79 20.9833C20.89 21.0233 21.01 20.9833 21.07 20.8833L21.97 19.3333C22.03 19.2433 22 19.1233 21.92 19.0533ZM17.63 19.2133C16.89 19.2133 16.28 18.6133 16.28 17.8633C16.28 17.1133 16.88 16.5133 17.63 16.5133C18.38 16.5133 18.98 17.1133 18.98 17.8633C18.98 18.6133 18.37 19.2133 17.63 19.2133Z"
        fill={colorCode}
      />
    </svg>
  );
}
