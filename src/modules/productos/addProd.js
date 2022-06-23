import { ProductsModel } from '../Products.model.js';
import '../../configs/db.config.js'

export const addProductDB=async(product)=>{
    try {
        const resp = await ProductsModel.create(product)
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
    }
}
