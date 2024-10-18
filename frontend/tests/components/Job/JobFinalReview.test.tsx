import { render } from "@testing-library/react";
import JobFinalReview from "../../../src/components/Job/JobFinalReview";
import { MemoryRouter } from "react-router";

describe("obFinalReview", () => {
  it("renders JobFinalReview", () => {
    render(
      <MemoryRouter>
        <JobFinalReview jobData={{ _id: 1 }} />
      </MemoryRouter>
    );
  });
});
