import app from '../src/app';
import { describe, it, expect} from 'vitest'
import type { PracticeEntryInput } from "@shared/types";
import request from 'supertest'

describe("POST /entries", () => {
  it("should send a request to the end point and make an entry in the database", async () => {
    const newEntry: PracticeEntryInput = {
      piece: "Prelude in C# minor",
      composer:"Rachmainoff",
      duration: 5,
      focusArea: "A section",
      notes: "d"
    }

    const responsePost = await request(app).post('/entries').send(newEntry)

    expect(responsePost.status).toBe(201)
    expect(responsePost.body.piece).toBe(newEntry.piece)
    expect(responsePost.body.composer).toBe(newEntry.composer)
    expect(responsePost.body.duration).toBe(newEntry.duration)
    expect(responsePost.body.focusArea).toBe(newEntry.focusArea)
    expect(responsePost.body.notes).toBe(newEntry.notes)
    expect(responsePost.body).toHaveProperty("id")
  })
})


