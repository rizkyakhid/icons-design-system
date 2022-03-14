import React from "react";
import { render } from "@testing-library/react";

import Filter6Icon from "./Filter6Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Filter6Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Filter6Icon />);
  });
});