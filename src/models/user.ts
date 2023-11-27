import {Model, Schema, model, Document} from 'mongoose';

export type abc = {
    name:string,
    dept:string
}

interface User{
    name:string,
    dept:string
}

// export interface UserInput extends Document{
//     name:string,
//     dept:string
// }

export interface UserModel extends Model<User>{
    myNewStaticFn():number
    mathStaticFn():string
}



const userSchema = new Schema<User,UserModel>({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
})

userSchema.static('myNewStaticFn',function myNewStaticFn(){
return 150;
})
userSchema.static('mathStaticFn',function mathStaticFn(){
return "Hello";
})

const UserModel = model<User,UserModel>('User',userSchema);
export default UserModel;
