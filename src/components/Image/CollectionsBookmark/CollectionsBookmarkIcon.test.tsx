import React from "react";
import { render } from "@testing-library/react";

import CollectionsBookmarkIcon from "./CollectionsBookmarkIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <CollectionsBookmarkIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<CollectionsBookmarkIcon />);
  });
});