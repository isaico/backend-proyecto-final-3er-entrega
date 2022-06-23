import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        max:100
    },
    descripcion:{
        type: String,
        required: true,
        max:100
    },
    precio:{
        type: Number,
        required: true,
    },
    foto:{
        type: String,
        required: true,
        max:300
    },
    stock:{
        type: Number,
        required: true,
        
    }
    
});

export const ProductsModel = mongoose.model('Products', Schema);
