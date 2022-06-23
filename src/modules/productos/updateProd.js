import { ProductsModel } from "../Products.model.js";
import '../../configs/db.config.js'

export const updateProdDB = async (id,product)=>{
    try {
        const resp = await ProductsModel.replaceOne({_id:id},product)
        return resp
    } catch (error) {
        console.log(error)
    }
}
