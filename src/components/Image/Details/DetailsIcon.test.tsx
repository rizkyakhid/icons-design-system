import React from "react";
import { render } from "@testing-library/react";

import DetailsIcon from "./DetailsIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <DetailsIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<DetailsIcon />);
  });
});