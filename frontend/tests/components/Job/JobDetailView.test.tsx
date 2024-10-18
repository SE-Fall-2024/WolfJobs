import { render } from "@testing-library/react";
import JobDetailView from "../../../src/components/Job/JobDetailView";
import { MemoryRouter } from "react-router";

describe("JobDetailView", () => {
  it("renders JobDetailView", () => {
    render(
      <MemoryRouter>
        <JobDetailView />
      </MemoryRouter>
    );
  });
});
