import type { PracticeEntry } from "../types"

type Props = {
    entry: PracticeEntry
    onDelete: () => void
}

export default function PracticeEntryCard({entry, onDelete}: Props) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 border border-gray-600 rounded-md p-4 mb-4 shadow-sm max-w-md mx-auto mt-4">
            <h3>
                {entry.piece} - {entry.composer}
            </h3>
            <p><strong>Duration: </strong>{entry.duration}</p>
            <p><strong>Focus Area: </strong>{entry.focusArea}</p>
            <p><strong>Notes: </strong>{entry.notes}</p>
            <p className="text-sm text-gray-500">{entry.date}</p>
            <button onClick={onDelete} >Delete</button>
        </div>
        
    )
}