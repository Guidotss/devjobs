"use client";
import { useEffect } from "react";
import { useJobsStore } from "@/store";
import Image from "next/image";

export const JobsGrid = () => {
  const { jobs, setJobs } = useJobsStore();
  useEffect(() => {
    setJobs();
  }, []);

  console.log(jobs);
  return (
    <div className="grid grid-cols-1 gap-10">
      {jobs.map((job) => (
        <div key={job.id} className="flex flex-col p-10 bg-violet rounded-lg">
          <Image src={job.logo} alt={job.company} width={50} height={50} />
          <div className="flex items-center">
            <h4>{job.postedAt}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
