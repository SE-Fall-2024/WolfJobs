import { render } from "@testing-library/react";
import JobGrading from "../../../src/components/Job/JobGrading";
import { MemoryRouter } from "react-router";

describe("JobGrading", () => {
  it("renders JobGrading", () => {
    render(
      <MemoryRouter>
        <JobGrading
          jobData={{
            _id: 1,
            question1: "Work experience?",
            question2: "CGPA?",
            question3: "Age?",
            question4: "Skills?",
          }}
        />
      </MemoryRouter>
    );
  });
});
