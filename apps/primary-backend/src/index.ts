import express from 'express'
import authRouter from './modules/auth/auth.controller'

const app = express()

// Core middleware
app.use(express.json())

// Health check / root
app.get('/', (req, res) => {
  res.send('hello world')
})

// Routes
app.use('/auth', authRouter)

// Global error handler (important)
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err)

  return res.status(500).json({
    message: err.message || 'Internal Server Error'
  })
})

app.listen(8080, () => {
  console.log("Server is running on port 8080")
})