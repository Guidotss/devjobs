import { MobileBgPatternHeaderIcon } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen bg-light_gray">
      <header className='bg-violet w-full'>
        <div className='flex justify-end'>
          <MobileBgPatternHeaderIcon/>
        </div>
        <form className='flex flex-col items-center'>
          <input 
            className='absolute -mt-5 py-4 px-6 rounded-lg'
            type="text"
            placeholder="Filter by tile..."

          />
        </form>
      </header>
    </main>
  )
}
