import {FilterQuery,UpdateQuery, QueryOptions} from 'mongoose';
import User,{abc} from '../models/user';

export function createUser(input:abc){
return User.create(input)
}

export function findUser(query:FilterQuery<abc>,options?:QueryOptions){
return User.find(query,{},options);
}

export function findAndUpdate(
    query:FilterQuery<abc>,
    update:UpdateQuery<abc>,
    options:QueryOptions
){
return User.findOneAndUpdate(query,update,options);
}

export function deleteUser(query:FilterQuery<abc>){
return User.deleteOne(query);
}