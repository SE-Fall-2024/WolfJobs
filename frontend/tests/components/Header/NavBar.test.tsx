import { render } from "@testing-library/react";
import NavBar from "../../../src/components/Header/NavBar";
import { MemoryRouter } from "react-router";

describe("NavBar", () => {
  it("renders NavBar", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });
});
