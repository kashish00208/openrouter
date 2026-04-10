import express from 'express';
import authRouter from './modules/auth/auth.controller';

const app = express()
app.use(express.json())

app.use('/auth', authRouter)

app.listen(8080, () => {
  console.log("Server is running on port 8080")
})