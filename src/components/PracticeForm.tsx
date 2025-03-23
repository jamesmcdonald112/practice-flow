import { useState} from "react"
import type { PracticeEntryInput } from "../types"
type Props = {
    onAddEntry: (entry: PracticeEntryInput) => void
}

export default function PracticeForm({onAddEntry}: Props) {
    const [piece, setPiece] = useState("")
    const [composer, setComposer] = useState("")
    const [duration, setDuration] = useState(0)
    const [focusArea, setFocusArea] = useState("")
    const [notes, setNotes] = useState("")

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        const newEntry = {
            piece,
            composer,
            duration,
            focusArea,
            notes
        }

        onAddEntry(newEntry)

        setPiece("")
        setComposer("")
        setDuration(0)
        setFocusArea("")
        setNotes("")


        console.log("Submitting piece")
    }

    const inputBaseStyles = "border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"

    return (
        <form onSubmit={handleSubmit}  className="flex flex-col  gap-2 border border-white rounded-md p-4 m-4 shadow-md">
            <label htmlFor="piece">Piece</label>
            <input  
                id="piece"
                className={inputBaseStyles}
                type="text"
                placeholder="Elegie in Eb minor"
                value={piece}
                onChange={(e) => setPiece(e.target.value)}
            />
            <label htmlFor="composer">Composer</label>
            <input 
                id="composer"
                className={inputBaseStyles}
                type="text" 
                placeholder="Rachmainoff"
                value={composer}
                onChange={(e) => setComposer(e.target.value)}
            />
            <label htmlFor="duration">Duration</label>
            <input 
                id="duration"
                className={inputBaseStyles}
                type="number"
                placeholder="6"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
            />
            <label htmlFor="focusArea">Focus Area</label>
            <input 
                id="focusArea"
                className={inputBaseStyles}
                type="text" 
                placeholder="B section"
                value={focusArea}
                onChange={(e) => setFocusArea(e.target.value)}
            />
            <label htmlFor="notes">Notes</label>
            <textarea
                id="notes"
                className={inputBaseStyles}
                placeholder="I need to practice slowly..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <button  
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
            >Add Practice Entry</button>
        </form>
    )
}


