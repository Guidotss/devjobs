"use client";
import { useEffect } from "react";
import { useJobsStore } from "@/store";
import { JobCard } from "./JobCard";

export const JobsGrid = () => {
  const { jobs, setJobs } = useJobsStore();

  useEffect(() => {
    setJobs();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
