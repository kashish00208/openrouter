import * as z from 'zod'
export const AuthModel = {
    signInBody: z.object({
        email: z.string(),
        password: z.string()
    }),
    signUpBody: z.object({
        name : z.string(),
        email: z.string(),
        password: z.string(),
    }),
    signInResponse: z.object({
        email: z.string(),
        token: z.string()
    }),
    signInValidL: z.literal("Invalid username or password try again")
} as const

export type AuthModel = {
    signInBody: z.infer<typeof AuthModel['signInBody']>
    signUpBody: z.infer<typeof AuthModel['signUpBody']>
    signInResponse: z.infer<typeof AuthModel['signInResponse']>
    signInValidL: z.infer<typeof AuthModel['signInValidL']>
}