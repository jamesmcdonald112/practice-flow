import { useState } from 'react'
import PracticeForm from './components/PracticeForm'
import PracticeLog from './components/PracticeLog'
import './App.css'
import type { PracticeEntry, PracticeEntryInput } from './types'



function App() {
  const [practiceEntries, setPracticeEntries] =useState<PracticeEntry[]>([
    {
      id: 1,
      piece: "Elegie",
      composer: "Rach",
      duration: 4,
      focusArea: "B section",
      notes: "Play slowly",
      date: "2025-03-21"
    }
  ])
  
  function onAddEntry(entry: PracticeEntryInput) {
    const newEntry: PracticeEntry = {
      ...entry,
      id: Math.random(),
      date: new Date().toISOString().split("T")[0]
    }
    setPracticeEntries(prevEntries => [...prevEntries, newEntry])
  }

  function onDeleteEntry(id: number) {
    setPracticeEntries(prevEntries => prevEntries.filter(entry => entry.id != id))
  }



  return (
   < >
    <main className='min-h-screen flex flex-col items-center justify-center  p-6'>
      <div className='w-full max-w-xl'>
        <PracticeForm onAddEntry={onAddEntry}/>
        <PracticeLog entries={practiceEntries} onDeleteEntry={onDeleteEntry}/>
      </div>
    </main>
  
    </>
  )
}

export default App
