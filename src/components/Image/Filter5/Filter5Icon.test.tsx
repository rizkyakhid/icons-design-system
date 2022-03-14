import React from "react";
import { render } from "@testing-library/react";

import Filter5Icon from "./Filter5Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Filter5Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Filter5Icon />);
  });
});