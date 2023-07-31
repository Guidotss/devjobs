import { create } from "zustand";
import { Job } from "@/interfaces";

interface JobsStore {
  jobs: Job[];
  setJobs: () => Promise<void>;
}

export const useJobsStore = create<JobsStore>((set) => ({
  jobs: [],
  setJobs: async () => {
    try {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      if (data.ok) {
        const { jobs } = await data.json();
        set({ jobs });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
