import { render } from "@testing-library/react";
import NoJobSelected from "../../../src/components/Job/NoJobSelected";
import { MemoryRouter } from "react-router";

describe("NoJobSelected", () => {
  it("renders NoJobSelected", () => {
    render(
      <MemoryRouter>
        <NoJobSelected />
      </MemoryRouter>
    );
  });
});
