"use client"

const Annoucements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Annoucements</h1>
                <span className="text-xs text-zinc-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-buildermaniaSkyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Nouvelle Annonce</h2>
                        <span className="text-xs text-zinc-400 bg-white rounded-md px-1 py-1">2 days ago</span>
                    </div>
                    <p className="mt-1 text-zinc-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="bg-buildermaniaPurpleLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Nouvelle Annonce</h2>
                        <span className="text-xs text-zinc-400 bg-white rounded-md px-1 py-1">2 days ago</span>
                    </div>
                    <p className="mt-1 text-zinc-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="bg-buildermaniaYellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Nouvelle Annonce</h2>
                        <span className="text-xs text-zinc-400 bg-white rounded-md px-1 py-1">2 days ago</span>
                    </div>
                    <p className="mt-1 text-zinc-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default Annoucements