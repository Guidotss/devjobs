"use client"
import { SearchIcon } from '@/components/ui';
import { LocationIcon } from '@/components/ui';
import { useJobsStore } from '@/store';
import { useState } from 'react';

type FilterForm = {
    title: string;
    location: string;
    fullTime: boolean;
}

export const SearchForm = () => {
    const [filterForm, setFilterForm] = useState<FilterForm>({
        title: '',
        location: '',
        fullTime: false
    }); 
    const { filterJobs } = useJobsStore(); 

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault(); 
        filterJobs("",filterForm);
    }


  return (
    <form className="flex" onSubmit={handleSubmit}>
        <div className="flex items-center">
            <input
                className="px-14 py-5 w-96 rounded-l-md bg-very_dark_blue focus:outline-none"
                placeholder="Filter by title, companies, expertise…"
                value={filterForm.title}
                onChange={(e) => setFilterForm({...filterForm, title: e.target.value})}
            />
            <div className="absolute ml-5">
                <SearchIcon/>
            </div>
        </div>
        <div className="flex items-center">
            <input
                className="px-12 py-5 w-72 bg-very_dark_blue border-l-[1px] border-dark_gray border-opacity-30 focus:outline-none"
                placeholder="Filter by location..."
                value={filterForm.location}
                onChange={(e) => setFilterForm({...filterForm, location: e.target.value})}
            />
            <div className="absolute ml-5">
                <LocationIcon/>
            </div>
        </div>
        <div className="flex gap-5  w-80 items-center bg-very_dark_blue border-l-[1px] border-gray border-opacity-30 rounded-r-md">
            <input
                type="checkbox"
                className="w-5 h-5 ml-5 bg-very_dark_blue rounded-md focus:outline-none"
                checked={filterForm.fullTime}
                onChange={(e) => setFilterForm({...filterForm, fullTime: e.target.checked})}
            />
            <span className="font-semibold">Full Time Only</span>
            <button className="px-8 py-2 bg-violet rounded-lg font-semibold" type='submit'>Search</button>
        </div>
    </form>
  )
}
