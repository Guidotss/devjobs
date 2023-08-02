"use client"
import { useTheme } from 'next-themes';
import { FilterIcon } from '@/components/ui/icons/FilterIcon';
import { SearchIcon } from '@/components/ui/icons/SearchIcon';
import { useUiStore } from '@/store';
import { FilterModal } from '@/components/ui/FilterModal';

export const SearchForm = () => {
  const { theme } = useTheme(); 
  const { toggleModal, isModalOpen } = useUiStore();

  return (
    <>
      <form className="flex flex-col items-center">
        <input
          className="absolute -mt-5 py-4 px-6 rounded-lg w-[327px]"
          type="text"
          placeholder="Filter by title..."
        />
        <div className="absolute right-24 flex items-center gap-4 -mt-3">
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
