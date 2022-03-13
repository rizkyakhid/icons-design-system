import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITextureIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TextureIcon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITextureIconProps) {
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
        d="M19.58 3.46318L3.15001 19.8932C3.24001 20.2332 3.42001 20.5432 3.66001 20.7932C3.91001 21.0332 4.22001 21.2132 4.56001 21.3032L21 4.87318C20.81 4.18318 20.27 3.64318 19.58 3.46318ZM11.95 3.38318L3.07001 12.2632V15.0932L14.78 3.38318H11.95ZM5.07001 3.38318C3.97001 3.38318 3.07001 4.28318 3.07001 5.38318V7.38318L7.07001 3.38318H5.07001ZM19.07 21.3832C19.62 21.3832 20.12 21.1632 20.48 20.7932C20.85 20.4332 21.07 19.9332 21.07 19.3832V17.3832L17.07 21.3832H19.07ZM9.36001 21.3832H12.19L21.07 12.5032V9.67318L9.36001 21.3832Z"
        fill={colorCode}
      />
    </svg>
  );
}
