import { z } from 'zod'

const userDataSchema = z.object({
        username: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(8),
        confirmPassword: z.string().min(8)
      
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"]
})