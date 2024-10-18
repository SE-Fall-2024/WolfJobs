import { render } from "@testing-library/react";
import JobScreening from "../../../src/components/Job/JobScreening";
import { MemoryRouter } from "react-router";

describe("JobScreening", () => {
  it("renders JobScreening", () => {
    render(
      <MemoryRouter>
        <JobScreening
          jobData={{
            _id: 1,
          }}
        />
      </MemoryRouter>
    );
  });
});
