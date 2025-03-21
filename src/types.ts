type PracticeEntry = {
    id: number
    piece: string
    composer: string
    duration: number
    focusArea: string 
    notes: string
    date: string 
}

type PracticeEntryInput = Omit<PracticeEntry, "id" | "date">


export type { PracticeEntry, PracticeEntryInput }