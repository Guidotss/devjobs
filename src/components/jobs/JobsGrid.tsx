"use client";
import { useEffect } from "react";
import { useJobsStore } from "@/store";
import { JobCard } from "./JobCard";

export const JobsGrid = () => {
  const { jobs, setJobs } = useJobsStore();

  useEffect(() => {
    setJobs();
  }, []);

  console.log(jobs);
  return (
    <div className="grid grid-cols-1 gap-10 mt-10">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job}/>
      ))}
    </div>
  );
};
