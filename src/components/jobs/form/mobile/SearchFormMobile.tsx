"use client"
import { useTheme } from 'next-themes';
import { FilterIcon } from '@/components/ui/icons/FilterIcon';
import { SearchIcon } from '@/components/ui/icons/SearchIcon';
import { useJobsStore, useUiStore } from '@/store';
import { FilterModal } from '@/components/ui/FilterModal';
import { useState } from 'react';

export const SearchFormMobile = () => {
  const [position, setPosition]  = useState<string>(""); 
  const { theme } = useTheme(); 
  const { toggleModal, isModalOpen } = useUiStore();
  const { filterJobs } = useJobsStore(); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    filterJobs(position);
  }

  return (
    <>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          className="absolute -mt-5 py-4 px-6 rounded-lg w-[327px]"
          type="text"
          placeholder="Filter by title..."
          onChange={(e) => setPosition(e.target.value)}
        />
        <div className="absolute flex justify-end items-center gap-4 -mt-3 w-[300px]">
          <div onClick={toggleModal}>
            <FilterIcon fill={`${ theme !== 'light' ? '#fff' : "" }`} />
          </div>
          <button className="bg-violet p-2 rounded-md">
            <SearchIcon fill='#fff' />
          </button>
        </div>
      </form>
      {isModalOpen && (
        <>
          <div className='flex items-center justify-center min-h-screen w-full bg-black bg-opacity-40 absolute z-10' onClick={toggleModal}/>
          <FilterModal/>
        </>
        
      )}
    </>
  );
};
