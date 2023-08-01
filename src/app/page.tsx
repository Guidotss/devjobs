import { JobsGrid, MobileBgPatternHeaderIcon, SearchForm } from '@/components'
import { Navbar } from '@/components/ui/Navbar'

export default function Home() {
  return (
    <main className="w-full h-full">
      <header className='bg-violet w-full flex flex-col justify-between'>
        <Navbar/>
        <div className='flex justify-end'>
          <MobileBgPatternHeaderIcon/>
        </div>
        <SearchForm/>
      </header>
      <section className='flex justify-center mt-16'>
        <JobsGrid/>
      </section>
    </main>
  )
}
