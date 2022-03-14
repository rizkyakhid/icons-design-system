import React from "react";
import { render } from "@testing-library/react";

import ExposurePlus2Icon from "./ExposurePlus2Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ExposurePlus2Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ExposurePlus2Icon />);
  });
});