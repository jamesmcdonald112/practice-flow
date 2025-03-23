import { expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { usePracticeEntries } from "../hooks/usePracticeEntries";
import { act } from "react";

const mockLocalStorage = [
    {
      id: 1,
      piece: "Elegie",
      composer: "Rach",
      duration: 4,
      focusArea: "LH clarity",
      notes: "Go slow and relax",
      date: "2025-03-21",
    },
];



test("Loads practice entries from local storage", () => {
    localStorage.setItem("practiceEntries", JSON.stringify(mockLocalStorage))

    const { result } = renderHook(() => usePracticeEntries());
    const entries = result.current[0]

    expect(entries).toEqual(mockLocalStorage)
});

test("save practice entries to local storage", () => {
    const {result} = renderHook(() => usePracticeEntries())
    const setEntries = result.current[1]

    const newEntries = [
        {
            id: 2,
            piece: "Nocturne",
            composer: "Chopin",
            duration: 5,
            focusArea: "Dynamics",
            notes: "Work on soft passages",
            date: "2025-03-25",
          },
          {
            id: 3,
            piece: "Prelude in A minor",
            composer: "Bach",
            duration: 7,
            focusArea: "Expression",
            notes: "Follow the phrasing",
            date: "2025-03-25",
          }

    ]

    act(() => {
        setEntries(newEntries)
    })

    const savedEntries = JSON.parse(localStorage.getItem("practiceEntries") || "[]")
    expect(savedEntries).toEqual(newEntries)
})