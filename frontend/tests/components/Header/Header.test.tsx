import { render } from "@testing-library/react";
import Header from "../../../src/components/Header/Header";
import { MemoryRouter } from "react-router";

describe("Header", () => {
  it("renders Header", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });
});
