import { Cart_items } from '../Cart_Items.model.js';
import '../../configs/db.config.js';

export const deleteCartProductDB = async (cartId,productId) => {
  try {
    const resp = await Cart_items.deleteOne({
      product_id: productId,
      cart_id: cartId,
    });
    console.log(resp)
    if (resp.deletedCount > 0) {
      return resp
    } else {
      const error = new Error(
        `Error al borrar el producto ${productId} en el cart:${cartId}`
      );
      error.code = 'PRODUCT_NOT_FOUND';
      throw error;
    }
    
  } catch (error) {
    console.log(error);
    return error
  }
};
