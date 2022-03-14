import React from "react";
import { render } from "@testing-library/react";

import Crop54Icon from "./Crop54Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Crop54Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Crop54Icon />);
  });
});