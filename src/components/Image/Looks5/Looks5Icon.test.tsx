import React from "react";
import { render } from "@testing-library/react";

import Looks5Icon from "./Looks5Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Looks5Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Looks5Icon />);
  });
});