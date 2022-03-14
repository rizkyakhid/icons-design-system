import React from "react";
import { render } from "@testing-library/react";

import GrainIcon from "./GrainIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <GrainIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<GrainIcon />);
  });
});