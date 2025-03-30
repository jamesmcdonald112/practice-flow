import { useEffect, useState } from "react"
import type { PracticeEntry } from "@shared/types"

export default function PracticeEntryList() {
    const [entries, setEntries] = useState<PracticeEntry[]>([])

    useEffect(() => {
        async function fetchEntries() {
            const res = await fetch('http://localhost:3000/entries')
            const data = await res.json()
            setEntries(data)
        }

        fetchEntries()
    }, [])

    const practiceEntryListLi = entries.map(entry => (
        <li>
            {entry.piece} by {entry.composer} - {entry.duration}
            <hr />
        </li>
    ))


    return (
        <section>
            <h2>Practice Entry List</h2>
            <ul>
                {practiceEntryListLi}
            </ul>
        </section>
    )
}