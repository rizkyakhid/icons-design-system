import React from "react";
import { render } from "@testing-library/react";

import MonochromePhotosIcon from "./MonochromePhotosIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <MonochromePhotosIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<MonochromePhotosIcon />);
  });
});