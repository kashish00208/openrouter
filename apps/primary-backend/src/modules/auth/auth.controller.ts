import { Auth } from "./service";
import express from 'express'
import { Request , Response } from 'express';

const router = express.Router()

router.post('/sign-in',async(req:Request,res:Response)=>{
    try{
        const response = await Auth.signIn(req.body);
        return res.json(response);
    }catch(err){
       console.error(err);
    }
});

router.post('/sign-up',async(req:Request, res:Response)=>{
    try{
        const response = await Auth.signUp(req.body);
        return res.json(response)
    }catch(err){
        console.error(err)
    }
});

export default router