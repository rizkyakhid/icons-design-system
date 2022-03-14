import React from "react";
import { render } from "@testing-library/react";

import Looks4Icon from "./Looks4Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Looks4Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Looks4Icon />);
  });
});