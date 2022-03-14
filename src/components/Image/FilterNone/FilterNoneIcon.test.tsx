import React from "react";
import { render } from "@testing-library/react";

import FilterNoneIcon from "./FilterNoneIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <FilterNoneIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<FilterNoneIcon />);
  });
});