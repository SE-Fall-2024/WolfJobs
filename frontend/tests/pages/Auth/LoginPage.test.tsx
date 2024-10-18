import { render } from "@testing-library/react";
import LoginPage from "../../../src/Pages/Auth/LoginPage";
import { MemoryRouter } from "react-router";

describe("LoginPage", () => {
  it("renders LoginPage", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
  });
});
