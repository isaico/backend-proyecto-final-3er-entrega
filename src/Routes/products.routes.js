import express from 'express'

import {
    getProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
} from '../Controllers/index.js'

export const productRouter = express.Router()

productRouter.get('/products',getProducts)
productRouter.get('/products/:id',getProductById)
productRouter.post('/products',addProduct)
productRouter.put('/products/:id',updateProduct)
productRouter.delete('/products/:id',deleteProduct)