import React from "react";
import { render } from "@testing-library/react";

import LandscapeIcon from "./LandscapeIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <LandscapeIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<LandscapeIcon />);
  });
});