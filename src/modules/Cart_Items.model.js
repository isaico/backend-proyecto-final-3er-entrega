import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    cart_id:{
        type:String,
        required:true
    },
    product_id:{
        type:String,
        required:true
    },
    product:{
        type:Object,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    }
})
export const Cart_items = mongoose.model('Cart_items',Schema)