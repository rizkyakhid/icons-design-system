import React from "react";
import { render } from "@testing-library/react";

import Crop32Icon from "./Crop32Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Crop32Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Crop32Icon />);
  });
});