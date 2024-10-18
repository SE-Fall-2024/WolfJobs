import { render } from "@testing-library/react";
import LogoutPage from "../../../src/Pages/Auth/LogoutPage";
import { MemoryRouter } from "react-router";

describe("LogoutPage", () => {
  it("renders LogoutPage", () => {
    render(
      <MemoryRouter>
        <LogoutPage />
      </MemoryRouter>
    );
  });
});
