import mongoose ,{connect} from 'mongoose';

// await mongoose.connect('mongodb://localhost:27017/student');
const DBconnection = ()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/student').then(() => {
        console.log("DB connect is successful")
    }).catch((error) => {
        console.error("Error is connecting mongo atlas database ", error)
    })
}



export default DBconnection;