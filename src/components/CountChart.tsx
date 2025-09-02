"use client"
import { Ellipsis } from 'lucide-react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 106,
        fill: 'white',
    },
    {
        name: 'Boys',
        count: 53,
        fill: '#FAE27C',
    },
    {
        name: 'Girls',
        count: 53,
        fill: '#CFCEFF',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Ellipsis className='cursor-pointer' />
            </div>
            {/* CHART */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <img src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-buildermaniaSky rounded-full" />
                    <h1 className='font-bold'>2,360</h1>
                    <h2 className='text-xs text-zinc-300'>Boys (55%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-buildermaniaYellow rounded-full" />
                    <h1 className='font-bold'>2,360</h1>
                    <h2 className='text-xs text-zinc-300'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart