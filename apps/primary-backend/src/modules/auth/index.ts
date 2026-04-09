import express from 'express'
import { Response, Request } from 'express'
const app = express()

//
app.get("/sign-in", async (req: Request, res: Response) => {
    try{

    }catch(err){
        res.status(400).json({"error":"internal server error"})
    }
})