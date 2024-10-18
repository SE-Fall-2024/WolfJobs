import { render } from "@testing-library/react";
import JobQuestionnaire from "../../../src/Pages/CreateJob/jobQuestionnaire";
import { MemoryRouter } from "react-router";

describe("JobQuestionnaire", () => {
  it("renders JobQuestionnaire", () => {
    render(
      <MemoryRouter>
        <JobQuestionnaire />
      </MemoryRouter>
    );
  });
});
