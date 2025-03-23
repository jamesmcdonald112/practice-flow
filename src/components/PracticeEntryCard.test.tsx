import PracticeEntryCard from "./PracticeEntryCard";
import {expect, test, vi} from 'vitest'
import {render, screen} from '@testing-library/react'
import { PracticeEntry } from "../types";
import userEvent from "@testing-library/user-event";


const mockEntry: PracticeEntry = {
    id: 1,
    piece: "Elegie",
    composer: "Rach",
    duration: 4,
    focusArea: "LH clarity",
    notes: "Go slow and relax",
    date: "2025-03-21"
}

test("renders the pice and composer", () => {
    render(<PracticeEntryCard entry={mockEntry} onDelete={() => {}}/>)
    expect(screen.getByText("Elegie - Rach")).toBeInTheDocument()
})

test("delets the entry", async () => {
    const handleDeleteEntry = vi.fn()
    render(<PracticeEntryCard entry={mockEntry} onDelete={handleDeleteEntry} />)

    await userEvent.click(screen.getByRole('button', { name: /Delete/i }))

    expect(handleDeleteEntry).toHaveBeenCalled()
})