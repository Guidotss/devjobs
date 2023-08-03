import { create } from "zustand";
import { Job } from "@/interfaces";

interface JobsStore {
  jobs: Job[];
  completedJobs: Job[];
  setJobs: () => Promise<void>;
  filterJobs: (title: string) => void;
  filterJobsByLocation: (location: string) => void;
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
        set({ jobs: data.jobs, completedJobs: data.jobs });
      }
    } catch (error) {
      console.log(error);
    }
  },
  filterJobs: (position: string) => {
    const { completedJobs } = get();

    const filteredJobs = completedJobs.filter((job) =>
      job.position.toLowerCase().includes(position.toLowerCase())
    );

    set({ jobs: filteredJobs });
  },

  filterJobsByLocation: (location: string) => {
    const { completedJobs } = get();
    const filteredJobs = completedJobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );

    if (location === "") return set({ jobs: completedJobs });

    set({ jobs: filteredJobs });
  },
}));
