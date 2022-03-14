import React from "react";
import { render } from "@testing-library/react";

import Crop169Icon from "./Crop169Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Crop169Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Crop169Icon />);
  });
});