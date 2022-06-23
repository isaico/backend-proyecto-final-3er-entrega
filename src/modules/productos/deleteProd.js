import { ProductsModel } from '../Products.model.js';
import '../../configs/db.config.js';

export const deleteProductDB = async (id) => {
    try {
        const resp =await ProductsModel.deleteOne({_id:id})
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
    }
};
