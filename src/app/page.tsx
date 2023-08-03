import { JobsGrid,  SearchForm } from '@/components'

export default function Home() {
  return (
    <main className="w-full h-full">
      <header className="bg-violet w-full flex flex-col justify-between">
        <SearchForm />
      </header>
      <section className='flex justify-center mt-16'>
        <JobsGrid/>
      </section>
    </main>
  )
}
