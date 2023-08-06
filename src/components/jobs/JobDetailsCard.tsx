"use client"
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Job } from "@/interfaces";

interface JobDetailCardProps {
  job: Job;
}

export const JobDetailscard: FC<JobDetailCardProps> = ({ job }) => {
 
  const { theme } = useTheme(); 

  return (
    <div className={`w-[327px] h-[205px] lg:w-[730px] md:h-[140px] md:w-[689px] ${theme == 'light' ? 'bg-white' : 'bg-very_dark_blue'} rounded-lg md:rounded-md  -mt-10 flex flex-col md:flex-row md:justify-between items-center`}>
      <div
        className={`${job.company
          .split(" ")
          .join(
            "-"
          )} h-[55px] md:h-[140px] lg:w-[140px] md:w-[140px] md:mt-0 md:rounded-none px-1 flex items-center md:justify-center rounded-2xl absolute  -mt-7 shadow-md`}
      >
        <Image
          src={job.logo}
          alt={job.company}
          width={50}
          height={50}
          className="p-[3px]"
        />
      </div>
      <div className="mt-10 md:mt-0 md:ml-44">
        <h3 className={`text-2xl font-bold ${theme == 'light' ? 'text-black' : 'text-white'}`}>{job.company}</h3>
        <span className="text-sm text-gray opacity-70">{job.company}.com</span>
      </div>
      <div className="mt-10 md:mt-0 md:mr-10">  
        <Link href={job.website}>
          <span className={`text-violet bg-violet ${theme === 'light' ? 'md:text-violet md:bg-violet' : 'md:bg-white md:bg-opacity-10 md:text-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300 ease-in-out'} md:bg-white md:bg-opacity-10 md:text-white bg-opacity-10 px-10 py-4 rounded-md font-bold`}>
            Company Site
          </span>
        </Link>
      </div>
    </div>
  );
};
