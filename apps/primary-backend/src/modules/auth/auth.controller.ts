import { Auth } from "./service";
import express from 'express'

const router = express.Router()

router.post('/sign-in',async(req,res)=>{
    try{
        console.log("Hit sign in")
        const response = await Auth.signIn(req.body);
        return res.json(response);
    }catch(err){
       console.error(err);
    }
});

router.post('/sign-up',async(req, res)=>{
    try{
        const response = await Auth.signUp(req.body);
        return res.json(response)
    }catch(err){
        console.error(err)
    }
});

export default router