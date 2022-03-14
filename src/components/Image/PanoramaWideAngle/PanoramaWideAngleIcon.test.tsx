import React from "react";
import { render } from "@testing-library/react";

import PanoramaWideAngleIcon from "./PanoramaWideAngleIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <PanoramaWideAngleIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<PanoramaWideAngleIcon />);
  });
});