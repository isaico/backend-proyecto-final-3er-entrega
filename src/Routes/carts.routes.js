import express from 'express'
import {
    createCart,
    getCart,
    addProductToCart,
    deleteCart,
    removeProductOnCart
} from '../Controllers/index.js'

export const cartRouter = express.Router()

cartRouter.post('/cart',createCart)
cartRouter.delete('/cart/:id',deleteCart)
cartRouter.get('/cart/:id/products',getCart)
cartRouter.post('/cart/:id/products/:productId',addProductToCart)
cartRouter.delete('/cart/:id/products/:productId',removeProductOnCart)