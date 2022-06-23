import { CartsModel } from "../Carts.model.js";
import '../../configs/db.config.js'
//crea el cart y retorna su Id
export const createCartDB = async ()=>{
    try {
        const result = await CartsModel.create({timeStamp: new Date()})
        const cartId = result._id
        console.log(cartId.toHexString(),"id del cart")
        return cartId.toHexString()
    } catch (error) {
        console.log(error)
        return error
    }
}