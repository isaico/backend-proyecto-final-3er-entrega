// import { addProductDB } from './productos/addProd.js';
// import { deleteProductDB } from './productos/deleteProd.js';
// import { readProdDB } from './productos/readProd.js';
// import { addProductToCartDB } from './carts/addProdToCart.js';
// import { producto1 } from '../objectTest/test.js';
// import { deleteCartProductDB } from './carts/deleteCartProd.js';
// import { deleteAllCartsDB } from './carts/deleteAllCarts.js';
// import { updateProdDB } from './productos/updateProd.js';
// import { readAllCartProductsDB } from './carts/readAllCartProd.js';
// import { createCartDB } from './carts/createCart.js';
// import { getCartDB } from './carts/getCart.js';

// producto1.nombre="ASDASD"
/* -------------------------------- PRODUCTS -------------------------------- */
// addProductDB({descripcion:"algo",precio:1,foto:"nada",stock:2})
// addProductDB({producto1})
// readProdDB("62641fef5c8ae348a8b7a508") //retorna null ya que fue eliminado
// deleteProductDB("62641fef5c8ae348a8b7a508")
// updateProdDB("62642089a287055a85a2811f",producto1)
/* ---------------------------------- CART ---------------------------------- */
// createCartDB()//crea el carrito, retorna id
// deleteAllCartsDB()
// readProdDB("62642089a287055a85a2811f")//algun objeto de la DB

// const productObjId=dbObject._id
// const productId=productObjId.toHexString()
// addProductToCartDB("62687de265e6421970dc1fb5","62642089a287055a85a2811f",1)
// addProductToCartDB("62687de265e6421970dc1fb5","62642089a287055a85a2811f",1)
// getCartDB("62687de265e6421970dc1fb5")
// deleteAllCartProdsDB()
// readAllCartProductsDB()
// deleteCartProductDB("62642379b707928b12f504ae","62687de265e6421970dc1fb5")
export * from './productos/index.js';
export * from './carts/index.js';
// export * from './users/index.js';

