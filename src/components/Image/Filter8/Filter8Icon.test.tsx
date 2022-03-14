import React from "react";
import { render } from "@testing-library/react";

import Filter8Icon from "./Filter8Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Filter8Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Filter8Icon />);
  });
});