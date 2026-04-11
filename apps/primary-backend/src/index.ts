import express from 'express';
import authRouter from './modules/auth/auth.controller';
import { Request , Response } from 'express';
const app = express();
app.use(express.json());

app.use((req:Request, res:Response, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

app.use('/auth', authRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
