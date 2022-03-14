import React from "react";
import { render } from "@testing-library/react";

import Brightness7Icon from "./Brightness7Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Brightness7Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Brightness7Icon />);
  });
});