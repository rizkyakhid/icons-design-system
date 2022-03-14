import React from "react";
import { render } from "@testing-library/react";

import ExposurePlus1Icon from "./ExposurePlus1Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ExposurePlus1Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ExposurePlus1Icon />);
  });
});