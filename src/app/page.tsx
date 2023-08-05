import { JobsGrid, SearchFormMobile, SearchForm } from '@/components'


export default function Home() {
  return (
    <main className="w-full h-full">
      <header className='flex justify-center'>
        <div className='md:hidden'>
          <SearchFormMobile />
        </div>
        <div className='hidden md:flex -mt-7'>
          <SearchForm/>
        </div>
        
      </header>
      <section className='flex justify-center mt-16 mb-5'>
        <JobsGrid/>
      </section>
    </main>
  )
}
