"use client"
import { useTheme } from 'next-themes';
import { FilterIcon } from '@/components/ui/icons/FilterIcon';
import { SearchIcon } from '@/components/ui/icons/SearchIcon';

export const SearchForm = () => {
  const { theme } = useTheme(); 
  console.log(theme); 
  return (
    <form className="flex flex-col items-center">
      <input
        className="absolute -mt-5 py-4 px-6 rounded-lg w-[327px]"
        type="text"
        placeholder="Filter by title..."
      />
      <div className="absolute right-24 flex items-center gap-4 -mt-3">
        <FilterIcon fill={`${ theme !== 'light' ? '#fff' : "" }`} />
        <button className="bg-violet p-2 rounded-md">
          <SearchIcon fill='#fff' />
        </button>
      </div>
    </form>
  );
};
