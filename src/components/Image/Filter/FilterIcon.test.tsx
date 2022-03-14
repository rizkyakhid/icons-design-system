import React from "react";
import { render } from "@testing-library/react";

import FilterIcon from "./FilterIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <FilterIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<FilterIcon />);
  });
});