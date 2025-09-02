"use client"
import { Ellipsis } from 'lucide-react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        present: 30,
        absent: 70,
    },
    {
        name: 'Wed',
        present: 20,
        absent: 100,
    },
    {
        name: 'Thu',
        present: 27,
        absent: 39,
    },
    {
        name: 'Fri',
        present: 18,
        absent: 48,
    },
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg h-full p-4'>
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Ellipsis className='cursor-pointer' />
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                    <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                    <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}} />
                    <Bar dataKey="present" fill="#CFCEFF" radius={[10, 10, 0, 0]} legendType='circle' />
                    <Bar dataKey="absent" fill="#FAE27C" radius={[10, 10, 0, 0]} legendType='circle' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart