import React from "react";
import { render } from "@testing-library/react";

import Looks6Icon from "./Looks6Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Looks6Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Looks6Icon />);
  });
});