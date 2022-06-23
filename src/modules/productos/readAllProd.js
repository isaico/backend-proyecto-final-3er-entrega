import { ProductsModel } from "../Products.model.js";
import '../../configs/db.config.js'

export const readAllProductsDB=async()=>{
    try {
        const resp  = await ProductsModel.find() // retorna array vacio  en caso negativo
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
    }
}

