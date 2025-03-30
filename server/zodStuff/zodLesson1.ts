import { z } from "zod"

const PracticeEntrySchema = z.object({
    piece: z.string(),
    duration: z.number()
})

// Valid example
const result1 = PracticeEntrySchema.safeParse({
    piece: "Moonlight Sonata",
    duration: 10
})

console.log(result1)

// Invalid example
const result2 = PracticeEntrySchema.safeParse({
    piece: "Moonlight Sonata",
    duration: "ten"
})

console.log(result2)