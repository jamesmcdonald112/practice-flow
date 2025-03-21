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

        const newEnrty = {
            piece,
            composer,
            duration,
            focusArea,
            notes
        }

        onAddEntry(newEnrty)

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
            <input  
                className={inputBaseStyles}
                type="text"
                placeholder="Elegie in Eb minor"
                value={piece}
                onChange={(e) => setPiece(e.target.value)}
                aria-label="Piece"
            />
            <input 
                className={inputBaseStyles}
                type="text" 
                placeholder="Rachmainoff"
                value={composer}
                onChange={(e) => setComposer(e.target.value)}
                aria-label="Composer"
            />
            <input 
                className={inputBaseStyles}
                type="number"
                placeholder="6"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                aria-label="duration"
            />
            <input 
                className={inputBaseStyles}
                type="text" 
                placeholder="B section"
                value={focusArea}
                onChange={(e) => setFocusArea(e.target.value)}
                aria-label="Focus Area"
            />
            <textarea
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


