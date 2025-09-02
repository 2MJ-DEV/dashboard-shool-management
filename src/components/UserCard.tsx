import { Ellipsis } from "lucide-react"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-buildermaniaPurple even:bg-buildermaniaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2025/01</span>
        <Ellipsis className='cursor-pointer' />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,250</h1>
      <h2 className="capitalize text-sm font-medium text-zinc-500">{type}</h2>
    </div>
  )
}

export default UserCard