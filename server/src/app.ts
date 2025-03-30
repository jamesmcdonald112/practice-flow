import express from 'express'
import { PrismaClient } from '@prisma/client'
import { PracticeEntryInput } from '@shared/types'
import { z } from 'zod'

const app = express()
app.use(express.json())


const prisma = new PrismaClient()

const practiceEntrySchema = z.object({
    piece: z.string().min(1),
    composer: z.string().min(1),
    duration: z.number().min(1),
    focusArea: z.string().min(1),
    notes: z.string().min(1)
})


app.get('/entries', async (req, res) => {
    try {
        const entries = await prisma.practiceEntry.findMany()
        res.status(200).json(entries)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch entries' })
    }
})

app.post('/entries', async(req, res) => {
    try {
        const {piece, composer, duration, focusArea, notes} = req.body

        const newEntry: PracticeEntryInput =  await prisma.practiceEntry.create({
            data: {
                piece,
                composer,
                duration,
                focusArea,
                notes
            }
        })

        res.status(201).json(newEntry)
    } catch (error) {
        res.status(500).json({error: "Error creating entry"})
    }
    
    
})



export default app