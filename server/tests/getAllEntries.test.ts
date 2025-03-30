import request from 'supertest'
import app from '../src/app'
import { describe, it, expect } from 'vitest'


describe("GET /entries", () => {
    it("should return an array of entries", async () => {
        const res = await request(app).get('/entries')

        expect(res.status).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    })
})