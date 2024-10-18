import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../../../src/Pages/Profile/Profile";

describe("Profile", () => {
  it("renders Profile", () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
  });
});
