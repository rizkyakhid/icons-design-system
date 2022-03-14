import React from "react";
import { render } from "@testing-library/react";

import ExposureNeg1Icon from "./ExposureNeg1Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ExposureNeg1Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ExposureNeg1Icon />);
  });
});