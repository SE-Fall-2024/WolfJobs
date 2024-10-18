import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/UserStore";
import { useJobStore } from "../../store/JobStore";
import { useApplicationStore } from "../../store/ApplicationStore";
import JobListTile from "../../components/Job/JobListTile";

// This is the notifications class

const Notifications = () => {
  const updateJobList = useJobStore((state) => state.updateJobList);
  const jobList = useJobStore((state) => state.jobList);

  const updateApplicationList = useApplicationStore(
    (state) => state.updateApplicationList
  );
  const applicationList = useApplicationStore((state) => state.applicationList);

  const [acceptedJobs, setAcceptedJobs] = useState([]);
  const [rejectedJobs, setRejectedJobs] = useState([]);
  const [isAcceptedVisible, setIsAcceptedVisible] = useState(true);
  const [isRejectedVisible, setIsRejectedVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/users/fetchapplications")
      .then((res) => {
        if (res.status !== 200) {
          toast.error("Error fetching applications");
          return;
        }
        updateApplicationList(res.data.application);
      });

    axios
      .get("http://localhost:8000/api/v1/users", {
        params: { page: 1, limit: 25 },
      })
      .then((res) => {
        if (res.status !== 200) {
          toast.error("Error fetching jobs");
          return;
        }
        updateJobList(res.data.jobs);
      });
  }, []);

  useEffect(() => {
    const acceptedApplications = applicationList.filter(
      (app) => app.status === "accepted"
    );
    const acceptedJobIds = acceptedApplications.map((app) => app.jobid);
    const acceptedJobList = jobList.filter((job) =>
      acceptedJobIds.includes(job._id)
    );
    setAcceptedJobs(acceptedJobList);

    const rejectedApplications = applicationList.filter(
      (app) => app.status === "rejected"
    );
    const rejectedJobIds = rejectedApplications.map((app) => app.jobid);
    const rejectedJobList = jobList.filter((job) =>
      rejectedJobIds.includes(job._id)
    );
    setRejectedJobs(rejectedJobList);
  }, [applicationList, jobList]);

  const handleJobClick = (jobId) => {
    navigate("/dashboard", { state: { selectedJobId: jobId } });
  };

  const toggleAcceptedVisibility = () => {
    setIsAcceptedVisible(!isAcceptedVisible);
  };

  const toggleRejectedVisibility = () => {
    setIsRejectedVisible(!isRejectedVisible);
  };

  return (
    <div className="notifications-page">
      <h1>
        Accepted Jobs ({acceptedJobs.length})
        <span onClick={toggleAcceptedVisibility} style={{ cursor: "pointer" }}>
          {isAcceptedVisible ? "▼" : "▲"}
        </span>
      </h1>
      {isAcceptedVisible && (
        <div className="notifications-list">
          {acceptedJobs.length > 0 ? (
            acceptedJobs.map((job) => (
              <div onClick={() => handleJobClick(job._id)} key={job._id}>
                <JobListTile data={job} action="view-details" />
              </div>
            ))
          ) : (
            <p>No accepted job notifications.</p>
          )}
        </div>
      )}

      <h1>
        Rejected Jobs ({rejectedJobs.length})
        <span onClick={toggleRejectedVisibility} style={{ cursor: "pointer" }}>
          {isRejectedVisible ? "▼" : "▲"}
        </span>
      </h1>
      {isRejectedVisible && (
        <div className="notifications-list">
          {rejectedJobs.length > 0 ? (
            rejectedJobs.map((job) => (
              <div onClick={() => handleJobClick(job._id)} key={job._id}>
                <JobListTile data={job} action="view-details" />
              </div>
            ))
          ) : (
            <p>No rejected job notifications.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
