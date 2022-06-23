import { CartsModel } from "../Carts.model.js";
import '../../configs/db.config.js'

export const deleteAllCartsDB =  async ()=>{
    try {
        const resp = await CartsModel.deleteMany({})
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
        return error
    }
}