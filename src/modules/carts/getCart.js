import { Cart_items } from '../Cart_Items.model.js';
import '../../configs/db.config.js';


export const getCartDB = async (cartId) => {
  try {
    const resp = await Cart_items.find({ cart_id: cartId });
    console.log(resp);
    if (resp.length) {
      const productos = resp.map((item) => {
        return {
          prodId: item.product_id,
          nombre: item.product.nombre,
          descripcion: item.product.descripcion,
          precio: item.product.precio,
          foto: item.product.foto,
          stock: item.product.stock,
          quantity: item.quantity,
        };
      });
      console.log(productos,"productos agregados")
      return {
        id: cartId,
        productos: productos,
      };
    } else {
      return {
        id: cartId,
        productos: [],
      };
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
