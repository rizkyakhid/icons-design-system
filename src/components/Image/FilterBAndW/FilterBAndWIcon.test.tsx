import React from "react";
import { render } from "@testing-library/react";

import FilterBAndWIcon from "./FilterBAndWIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <FilterBAndWIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<FilterBAndWIcon />);
  });
});