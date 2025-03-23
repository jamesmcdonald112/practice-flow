import { render, screen, within } from '@testing-library/react'
import { PracticeEntry } from '../types'
import { expect, test } from 'vitest'
import PracticeLog from './PracticeLog'


const mockEntry: PracticeEntry = {
    id: 1,
    piece: "Elegie",
    composer: "Rach",
    duration: 4,
    focusArea: "LH clarity",
    notes: "Go slow and relax",
    date: "2025-03-21"
}



test("renders a practice entry with piece name", () => {
    // Render practice Log for testing
    render(<PracticeLog entries={[mockEntry]} onDeleteEntry={() => {}} />)
    // Composer and Piece
    expect(screen.getByText("Elegie - Rach")).toBeInTheDocument()

    // Duration
    const durationParagraph = screen.getByText((content, node) => {
        return node?.textContent === "Duration: 4"
    })
    expect(durationParagraph).toBeInTheDocument()

    // Focus Area
    const focusAreaParagraph = screen.getByText((content, node) => {
        return node?.textContent === "Focus Area: LH clarity"
    })
    expect(focusAreaParagraph).toBeInTheDocument()

    // Notes
    const notesParagraph = screen.getByText((content, node) => {
        return node?.textContent === "Notes: Go slow and relax"
    })
    expect(notesParagraph).toBeInTheDocument()

    // Date
    expect(screen.getByText("2025-03-21")).toBeInTheDocument()
})