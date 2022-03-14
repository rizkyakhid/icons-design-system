import React from "react";
import { render } from "@testing-library/react";

import PaletteIcon from "./PaletteIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <PaletteIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<PaletteIcon />);
  });
});