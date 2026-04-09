import { Router } from "express";
import { Auth } from "./service";

const router = Router();

router.post('/sign-in',async(req,res,next)=>{
    try{
        const response = await Auth.signIn(req.body);
        return res.json(response);
    }catch(err){
        next(err);
    }
});

router.post('/sign-up',async(req, res, next)=>{
    try{
        const response = await Auth.signUp(req.body);
        return res.json(response)
    }catch(err){
        next(err)
    }
});

export default router