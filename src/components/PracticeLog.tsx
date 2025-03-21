import type { PracticeEntry } from "../types"
import PracticeEntryCard from "./PracticeEntryCard"

type Props = {
    entries: PracticeEntry[]
    onDeleteEntry: (id: number) => void
}

export default function PracticeLog({entries, onDeleteEntry}: Props) {
    return (
        <section className="flex flex-col justify-center items-center">
            <h2>Practice Log</h2>

            {entries.length === 0 && (
                <p className="text-gray-500">No entries yet. Add one above!</p>
            )}

            {entries.map(entry => (
                <PracticeEntryCard key={entry.id} entry={entry} onDelete={() => onDeleteEntry(entry.id)}/>
               ))}
        </section>

        
    )
}