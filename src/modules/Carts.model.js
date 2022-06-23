import mongoose from "mongoose";

const Schema = new mongoose.Schema({
   
    timeStamp:{
        type:String
    },
    // _id:{
    //     type:String,
    //     // required:true
    // }
})
export const CartsModel = mongoose.model('Carts',Schema)