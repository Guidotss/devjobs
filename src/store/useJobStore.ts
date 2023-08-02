import { create } from "zustand";
import { Job } from "@/interfaces";

interface JobsStore {
  jobs: Job[];
  completedJobs: Job[];
  setJobs: () => Promise<void>;
  filterJobs: (title: string) => void;
}

export const useJobsStore = create<JobsStore>((set, get) => ({
  jobs: [],
  completedJobs: [],
  setJobs: async () => {
    try {
      const response = await fetch("/api/jobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.ok) {
        set({ jobs: data.jobs , completedJobs: data.jobs});
      }
    } catch (error) {
      console.log(error);
    }
  },
  filterJobs: (position: string) => {
    const { jobs, completedJobs } = get();
    const filteredJobs = jobs.filter((job) =>
      job.position.toLowerCase().includes(position.toLowerCase())
    );

    if(position === '') return set({ jobs: completedJobs }); 

    set({ jobs: filteredJobs });

    
    
  }
}));
