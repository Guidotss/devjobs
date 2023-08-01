"use client"
import { useState } from 'react'; 
import { FilterIcon, JobsGrid, Logo, MobileBgPatternHeaderIcon, SearchIcon, SunIcon } from '@/components'
import { MoonIcon } from '@/components/ui/icons/MoonIcon'
import 'animate.css'; 

export default function Home() {
  const [theme, setTheme]  = useState(false); 
  return (
    <main className="w-full h-full bg-light_gray">
      <header className='bg-violet w-full flex flex-col justify-between'>
        <div className='w-full flex justify-between items-center p-3'>
          <Logo/>
          <div className='flex items-center gap-2'>
            <SunIcon/>
            <div className='w-12 h-5 p-[2px] bg-white rounded-xl cursor-pointer' onClick={() => setTheme(!theme)}>
              <div  className={`w-4 h-4 rounded-full bg-violet self-start ${ theme ? 'animate-move-left' : 'moveRight' }`}/>
            </div>
            <MoonIcon/>
          </div>
        </div>
        <div className='flex justify-end'>
          <MobileBgPatternHeaderIcon/>
        </div>
        <form className='flex flex-col items-center'>
          <input 
            className='absolute -mt-5 py-4 px-6 rounded-lg w-[327px]'
            type="text"
            placeholder="Filter by title..."
          />
          <div className='absolute right-24 flex items-center gap-4 -mt-3'>
            <FilterIcon/>
            <button className='bg-violet p-2 rounded-md'>
              <SearchIcon fill='#fff'/>
            </button>
          </div>
        </form>
      </header>
      <section className='flex justify-center mt-16'>
        <JobsGrid/>
      </section>
    </main>
  )
}
