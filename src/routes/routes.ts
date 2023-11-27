import express, {Request, Response} from 'express';
import {homeDetail} from '../controllers/user';
const router = express.Router();

router.get('/home',homeDetail);
router.get('/about',(req:Request,res:Response):void => {
    res.json({message:"About page"})
})

export {router}