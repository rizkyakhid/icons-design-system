import React from "react";
import { render } from "@testing-library/react";

import TimelapseIcon from "./TimelapseIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <TimelapseIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<TimelapseIcon />);
  });
});