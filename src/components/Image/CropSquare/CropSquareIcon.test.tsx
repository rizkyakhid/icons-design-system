import React from "react";
import { render } from "@testing-library/react";

import CropSquareIcon from "./CropSquareIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <CropSquareIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<CropSquareIcon />);
  });
});