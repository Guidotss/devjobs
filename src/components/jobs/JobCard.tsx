import { FC } from 'react';
import Image from 'next/image';
import { Job } from '@/interfaces';

interface JobCardProps {
  job: Job;
}

export const JobCard: FC<JobCardProps> = ({ job }) => {
  return (
    <div key={job.id} className={`flex flex-col p-5 min-w-[327px] min-h-[228px] bg-white rounded-lg`}>
      <div className={`${job.company.split(" ").join("-")} h-[55px] px-1 flex items-center justify-center rounded-2xl absolute left-24 -mt-11 shadow-md z-10`}>
        <Image src={job.logo} alt={job.company} width={50} height={50} className='p-[3px]'/>
      </div>
      <div className="flex text-gray mt-5 items-center gap-3">
        <h4>{job.postedAt}</h4>
        <span className='w-1 h-1 bg-gray rounded-full mt-1'/>
        <h4>{job.contract}</h4>
      </div>
      <div className='flex flex-col mt-2'>
        <h2 className='font-bold text-lg'>{ job.position }</h2>
        <span className='text-gray text-sm'>{ job.company }</span>
      </div>
      <h3 className='mt-14 text-violet font-semibold'>{job.location}</h3>
    </div>
  )
}

