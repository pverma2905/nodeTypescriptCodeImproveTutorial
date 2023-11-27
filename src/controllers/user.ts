import express, {Request, Response} from 'express';
import UserModel,{abc} from '../models/user';
import {createUser,findAndUpdate, findUser, deleteUser} from '../services/users.service';

const homeDetail = async (req:Request,res:Response) => {
    // const user = UserModel.myNewStaticFn();
    const user = UserModel.mathStaticFn();

    // let myData = await UserModel.find();

    ////////////////////////// Add ////////////////////////////

//    const user = await createUser({name:"testName",dept:"testDept"});

    ////////////////////////// Update ////////////////////////////
    
//    const user = await findAndUpdate({name:'test'}, {dept:'HR'},{new:true});

    ////////////////////////// find ////////////////////////////
    
//    const user = await findUser({_id:'65642872811640aa322f7b22'});


    ////////////////////////// delete ////////////////////////////
    
//    const user = await deleteUser({_id:'65642872811640aa322f7b22'});


    let obj ={
        x:12,
        y:30
    }
    // let data = sumData(10,12)
    let data = sumData(obj)

    res.json({
        message:"Home page",
        data:data,
        myData:user
    })
}

interface params{
    x:number;
    y:number;
}

// const sumData = (x:number,y:number):number => {
//     return x+y;
// }

type sumCheck =(x:params)=>number;

const sumData:sumCheck = (obj:params) => {
    return obj.x+obj.y;
}



export {homeDetail}