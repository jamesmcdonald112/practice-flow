import PracticeForm from "./PracticeForm";
import {expect, test, vi} from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

// Render
test("Renders the practice form components with inputs and submit button", () => {
    render(<PracticeForm onAddEntry={() => {}} />)

    // Inputs
    expect(screen.getByLabelText('Piece')).toBeInTheDocument()
    expect(screen.getByLabelText('Composer')).toBeInTheDocument()
    expect(screen.getByLabelText('Duration')).toBeInTheDocument()
    expect(screen.getByLabelText('Focus Area')).toBeInTheDocument()
    expect(screen.getByLabelText('Notes')).toBeInTheDocument()

    // Button
    expect(screen.getByRole('button')).toBeInTheDocument()
    
})

test("calls onAddEntry with the correct data", async() => {
    const handleAddEntry = vi.fn()
    render(<PracticeForm onAddEntry={handleAddEntry} />)

    // User enters data
    await userEvent.type(screen.getByLabelText("Piece"), "Elegie")
    await userEvent.type(screen.getByLabelText("Composer"), "Rach")
    await userEvent.type(screen.getByLabelText("Duration"), "4")
    await userEvent.type(screen.getByLabelText("Focus Area"), "LH clarity")
    await userEvent.type(screen.getByLabelText("Notes"), "Relax left hand")

    // User clicks submit button
    await userEvent.click(screen.getByRole("button"))

    expect(handleAddEntry).toHaveBeenCalledWith({
        piece: "Elegie",
        composer: "Rach",
        duration: 4,
        focusArea: "LH clarity",
        notes: "Relax left hand"
    })

})