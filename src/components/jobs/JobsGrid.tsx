"use client";
import { useJobsStore } from "@/store";

export const JobsGrid = () => {
  const { jobs } = useJobsStore();
  console.log(jobs);
  return <div>JobGrid</div>;
};
