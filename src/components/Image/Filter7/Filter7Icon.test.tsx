import React from "react";
import { render } from "@testing-library/react";

import Filter7Icon from "./Filter7Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Filter7Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Filter7Icon />);
  });
});