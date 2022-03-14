import React from "react";
import { render } from "@testing-library/react";

import WbIridescentIcon from "./WbIridescentIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(<WbIridescentIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the Iconography component with default state", () => {
    render(<WbIridescentIcon />);
  });
});
