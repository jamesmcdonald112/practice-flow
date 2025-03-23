import { PracticeEntry } from "../types"
import { useState, useEffect } from "react"

export function usePracticeEntries(): [PracticeEntry[], (entries: PracticeEntry[]) => void] {
    const [entries, setEntries] = useState<PracticeEntry[]>([])

    // Load entries
    useEffect(() => {
        const stored = localStorage.getItem("practiceEntries")
        if(stored) {
            setEntries(JSON.parse(stored))
        }
    }, [])

    // Save to localStorage whenever entries change
    useEffect(() => {
        localStorage.setItem("practiceEntries", JSON.stringify(entries))
    }, [entries])

    return [entries, setEntries]
}