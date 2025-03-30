export type PracticeEntryInput = {
    piece: string
    composer: string
    duration: number
    focusArea: string
    notes: string
  }
  
  export type PracticeEntry = PracticeEntryInput & {
    id: number
    createdAt: string 
  }