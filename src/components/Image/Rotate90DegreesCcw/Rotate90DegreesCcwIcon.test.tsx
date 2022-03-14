import React from "react";
import { render } from "@testing-library/react";

import Rotate90DegreesCcwIcon from "./Rotate90DegreesCcwIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Rotate90DegreesCcwIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Rotate90DegreesCcwIcon />);
  });
});