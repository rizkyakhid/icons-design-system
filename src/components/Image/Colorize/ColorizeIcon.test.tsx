import React from "react";
import { render } from "@testing-library/react";

import ColorizeIcon from "./ColorizeIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ColorizeIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ColorizeIcon />);
  });
});