const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        {/* SEARCH BAR */}
        <div className="hidden md:flex">
            <img src="/search.png" alt="Search" width={14} height={14} />
            <input type="text" placeholder="Search..." name="" id="" />
        </div>

        {/* ICONS AND USER */}
        <div className="flex gap-6">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <img src="/message.png" alt="" width={20} height={20} />
            </div>

            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <img src="/announcement.png" alt="" width={20} height={20} />
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