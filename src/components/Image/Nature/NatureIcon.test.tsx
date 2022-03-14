import React from "react";
import { render } from "@testing-library/react";

import NatureIcon from "./NatureIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <NatureIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<NatureIcon />);
  });
});