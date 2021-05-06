import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobLeftCard from "../components/JobLeftCard";
import JobRightDescription from "../components/JobRightDescription";
import { jobData } from "../data";

const JobDescription = () => {
  // useparams to find url path element
  const { id } = useParams();
  // state to keep redirected job data
  const [jobDesc, setJobDesc] = useState(null);

  //function to find and filter out particular job role clicked
  const getJobData = (id) => {
    const data = jobData && jobData.find((job) => job.id === Number(id));
    setJobDesc(data);
  };

  useEffect(() => {
    getJobData(id);
    console.log(jobDesc);
  }, []);

  return (
    <div className="job_description_container">
      <div className="left_job">
        <JobLeftCard job={jobDesc} />
      </div>
      <div className="right_job">
        <h1 className="job_role_heading">{jobDesc && jobDesc.role}</h1>
        <JobRightDescription />
      </div>
    </div>
  );
};

export default JobDescription;
