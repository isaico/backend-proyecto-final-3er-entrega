import { CartsModel } from "../Carts.model.js";
import '../../configs/db.config.js'

export const deleteCartDB =  async (cartId)=>{
 try {
     const resp = await CartsModel.deleteOne({_id:cartId})
     return resp
 } catch (error) {
     console.log(error)
     return  error
 }
}