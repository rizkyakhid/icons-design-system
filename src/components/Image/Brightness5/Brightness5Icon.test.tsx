import React from "react";
import { render } from "@testing-library/react";

import Brightness5Icon from "./Brightness5Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Brightness5Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Brightness5Icon />);
  });
});