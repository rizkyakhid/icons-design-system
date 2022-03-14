import React from "react";
import { render } from "@testing-library/react";

import CollectionsIcon from "./CollectionsIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <CollectionsIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<CollectionsIcon />);
  });
});