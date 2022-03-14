import React from "react";
import { render } from "@testing-library/react";

import Looks3Icon from "./Looks3Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Looks3Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Looks3Icon />);
  });
});