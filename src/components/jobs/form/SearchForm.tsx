import { LocationIcon, SearchIcon } from "@/components"


export const SearchForm = () => {
  return (
    <form className="flex">
        <div className="flex items-center">
            <input
                className="px-14 py-5 w-96 rounded-l-md bg-very_dark_blue focus:outline-none"
                placeholder="Filter by title, companies, expertise…"
            />
            <div className="absolute ml-5">
                <SearchIcon/>
            </div>
        </div>
        <div className="flex items-center">
            <input
                className="px-12 py-5 w-72 bg-very_dark_blue border-l-[1px] border-dark_gray border-opacity-30 focus:outline-none"
                placeholder="Filter by location..."
            />
            <div className="absolute ml-5">
                <LocationIcon/>
            </div>
        </div>
        <div className="flex gap-5  w-80 items-center bg-very_dark_blue border-l-[1px] border-gray border-opacity-30 rounded-r-md">
            <input
                type="checkbox"
                className="w-5 h-5 ml-5 bg-very_dark_blue rounded-md focus:outline-none"
            />
            <span className="font-semibold">Full Time Only</span>
            <button className="px-8 py-2 bg-violet rounded-lg font-semibold">Search</button>
        </div>
    </form>
  )
}
