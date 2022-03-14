import React from "react";
import { render } from "@testing-library/react";

import Filter9Icon from "./Filter9Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Filter9Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Filter9Icon />);
  });
});