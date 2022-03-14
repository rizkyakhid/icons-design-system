import React from "react";
import { render } from "@testing-library/react";

import AudiotrackIcon from "./AudiotrackIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AudiotrackIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AudiotrackIcon />);
  });
});