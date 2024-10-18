import { render } from "@testing-library/react";
import JobListTile from "../../../src/components/Job/JobListTile";
import { MemoryRouter } from "react-router";

describe("JobListTile", () => {
  it("renders JobListTile", () => {
    render(
      <MemoryRouter>
        <JobListTile
          data={{
            _id: 1,
            managerAffilication: "nc-state-dining",
            pay: "100?",
            status: "closed",
          }}
        />
      </MemoryRouter>
    );
  });
});
