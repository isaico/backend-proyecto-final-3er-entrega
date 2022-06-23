import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(
  process.env.MONGOATLAS_URI,
  (err)=>{
    if(err){
        console.log('error al conectar MONGODB 😢')  

    }else{

        console.log('conectado correctamente MONGODB 😇')
    }
  }
);
export default mongoose
