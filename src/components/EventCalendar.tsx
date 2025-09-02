"use client"
import { time } from 'console';
import { Ellipsis } from 'lucide-react';
import { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Journée Portes Ouvertes",
    time: "15:13 PM - 16:13 PM",
    description: "Découverte de l’école, de ses programmes et de son environnement éducatif."
  },
  {
    id: 2,
    title: "Semaine Culturelle et Artistique",
    time: "15:13 PM - 16:13 PM",
    description: "Une semaine dédiée aux talents créatifs et à la diversité culturelle des élèves."
  },
  {
    id: 3,
    title: "Tournoi Sportif Interclasses",
    time: "15:13 PM - 16:13 PM",
    description: "Compétition amicale pour renforcer l’esprit d’équipe et le fair-play."

  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
      {/* TITLE */}
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h1 className='text-xl font-semibold mt-4'>Events</h1>
        <Ellipsis className='cursor-pointer' />
      </div>
      <div className="flex flex-col gap-4 mt-3">
        {events.map((event) => (
          <div key={event.id} className="p-5 rounded-md border-2 border-zinc-100 border-t-4 odd:border-t-buildermaniaSky even:border-t-buildermaniaYellow">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-zinc-600">{event.title}</h1>
            <span className="text-xs text-zinc-300">{event.time}</span>
            </div>
            <p className="mt-2 text-zinc-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar