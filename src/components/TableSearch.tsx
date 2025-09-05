import { Search } from "lucide-react"

const TableSearch = () => {
  return (
            <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-zinc-300 px-2">
                <Search />
                <input type="text" placeholder="Search..." name="" id="" className="w-[200px] p-2 bg-transparent outline-none" />
            </div>
  )
}

export default TableSearch