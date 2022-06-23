import { CartsModel } from "../Carts.model.js";
import '../../configs/db.config.js'

export const readAllCartProductsDB=async()=>{
    try {
        const resp  = await CartsModel.find() // retorna array vacio  en caso negativo
        console.log(resp,"read Carts")
        return resp
    } catch (error) {
        console.log(error)
    }
}
