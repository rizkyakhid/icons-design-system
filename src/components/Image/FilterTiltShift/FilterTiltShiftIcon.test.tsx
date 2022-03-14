import React from "react";
import { render } from "@testing-library/react";

import FilterTiltShiftIcon from "./FilterTiltShiftIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <FilterTiltShiftIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<FilterTiltShiftIcon />);
  });
});