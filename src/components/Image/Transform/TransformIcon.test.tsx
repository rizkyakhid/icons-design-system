import React from "react";
import { render } from "@testing-library/react";

import TransformIcon from "./TransformIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <TransformIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<TransformIcon />);
  });
});