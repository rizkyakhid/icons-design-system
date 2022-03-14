import React from "react";
import { render } from "@testing-library/react";

import Timer10Icon from "./Timer10Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Timer10Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Timer10Icon />);
  });
});