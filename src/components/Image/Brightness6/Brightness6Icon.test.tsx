import React from "react";
import { render } from "@testing-library/react";

import Brightness6Icon from "./Brightness6Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Brightness6Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Brightness6Icon />);
  });
});