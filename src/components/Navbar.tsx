import { Bell, MessageSquareText, Search } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-white">
            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-zinc-300 px-2">
                <Search />
                <input type="text" placeholder="Search..." name="" id="" className="w-[200px] p-2 bg-transparent outline-none" />
            </div>

            {/* ICONS AND USER */}
            <div className="flex gap-6 items-center justify-end w-full">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <MessageSquareText width={20} height={20} />
                </div>

                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Bell width={20} height={20} />
                    <div className="absolute -top-3 -right-2 w-5 h-5 flex items-center justify-center bg-red-600 text-white rounded-full text-xs">3</div>
                </div>

                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">Jules MUKADI</span>
                    <span className="text-[10px] text-zinc-500">Admin</span>
                </div>

                <img src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
            </div>
        </div>
    )
}

export default Navbar