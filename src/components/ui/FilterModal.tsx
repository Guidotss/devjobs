"use client"
import { useState } from 'react';
import { useJobsStore, useUiStore } from "@/store";
import { LocationIcon } from "."
import 'animate.css'; 

export const FilterModal = () => {
  const { filterJobsByLocation, filterJobsByContract, isFullTimeOnly, toggleFullTimeOnly } = useJobsStore(); 
  const { toggleModal } = useUiStore(); 
  const [location, setLocation] = useState<string>("");
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    filterJobsByLocation(location);
    filterJobsByContract(); 
    toggleModal();
  }


  return (
    <form className="w-[327px] h-[217px] flex flex-col z-10 bg-white absolute self-center  top-32 rounded-sm animate__animated animate__fadeIn animate__faster" onSubmit={handleSubmit}>
      <div className="text-black border-b-[1px] border-b-gray py-5 px-5">
        <div className="flex items-center gap-2">
          <div>
            <LocationIcon/>
          </div>
          <input 
            className="bg-white w-full py-2 px-2 rounded-lg focus:outline-none"
            placeholder="Filter by location..."
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      <div className="px-5 mt-5 flex items-center gap-5">
        <input
          className="w-[30px] h-[30px] opacity-20 cursor-pointer"
          type="checkbox"
          checked={isFullTimeOnly}
          onChange={toggleFullTimeOnly}
        />  
        <h3 className="text-black font-bold text-lg">Full time only</h3>
      </div>
      <div className="w-full px-5 mt-8">
        <button className="bg-violet w-full py-2 rounded-lg font-semibold">
          Search
        </button>
      </div>
    </form> 
  )
}
