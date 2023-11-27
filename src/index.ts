import express, {Request, Response} from 'express';
import {router} from './routes/routes';

import DBconnection from './config/db'; 
const app = express();

const PORT = 4000;

app.use(express.json());
DBconnection()

app.use('/', router);


app.get('/test',(req:Request,res:Response):void => {
    res.json({data:"hello"})
})


app.listen(PORT, ():void => {
    console.log(`Server is running on port ${PORT}`);
  });