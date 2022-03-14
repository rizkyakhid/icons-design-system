import React from "react";
import { render } from "@testing-library/react";

import ExposureNeg2Icon from "./ExposureNeg2Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ExposureNeg2Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ExposureNeg2Icon />);
  });
});