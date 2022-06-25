import { getCartDB } from '../modules/carts/getCart.js';
import {
  addProductToCartDB,
  deleteCartDB,
  deleteCartProductDB,
  createCartDB,
} from '../modules/index.js';
import {sendMailGmail} from '../utils/nodemailer.utils.js'
import { sendWsp } from '../utils/twilio.utils.js';

export const createCart = async (req, res, next) => {
  try {
    const dbResp = await createCartDB();
    if (dbResp) {
      req.session.cart_id=dbResp  
      //esta ruta /api/cart es la que me permitira ver los productos una vez creado el carrito
      res.send('<h2>carrito creado con exito <a href="/productos">comenzar a comprar</a></h2>');
    } else {
      throw dbResp;
    }
  } catch (error) {
    next(error);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const cartId = req.params.id;
    const cart = await getCartDB(cartId);
    if (cart) {
      const user = req.session.user
      //mail al admin 
      const mailOptions = {
        from: process.env.USER,
        to: [process.env.ADMIN_GMAIL, process.env.USER],
        subject: `Nuevo pedido de ${user.firstName} ${user.lastName},mail: ${user.email}`,
        text: `nuevo pedido del cart id: ${cart.id} con los siguientes productos: ${cart.productos}`
      };
      sendMailGmail(mailOptions)
      //wsp al admin
      const message = {
        body: `nuevo pedido de ${user.firstName} ${user.lastName} mail:${user.email}`,
        from: process.env.TWILIO_WSP,
        to: 'whatsapp:+549'+`${user.phone}`,
      };
      sendWsp(message)
      res.send(`pedido realizado con exito,  N° de pedido: ${cart.id} de los productos ${cart.productos}`);
    } else {
      const error = new Error(`El carrito con id ${cartId} no existe`);
      error.code = 'CART_NOT_FOUND';
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};

export const addProductToCart = async (req, res, next) => {
  try {
    const cartId = req.params.id;
    const productId = req.params.productId;
    const qty = req.body.amount;
    const dbRes = await addProductToCartDB(cartId, productId, qty);
    if (dbRes) {
      res.send(
        `Producto con id ${productId} añadido al carrito con id ${cartId}`
      );
    } else {
      throw dbRes;
    }
  } catch (error) {
    error.status = 500;
    next(error);
  }
};
export const deleteCart = (req, res, next) => {
  try {
    const cartId = req.params.id;
    const dbRes = deleteCartDB(cartId);
    if (dbRes) {
      res.send(`Carrito con id ${cartId} borrado`);
    } else {
      throw dbRes;
    }
  } catch (error) {
    next(error);
  }
};

export const removeProductOnCart = async (req, res, next) => {
  try {
    const cartId = req.params.id;
    const productId = req.params.productId;
    const dbRes = await deleteCartProductDB(cartId, productId);
    if (dbRes) {
      res.send(
        `Producto con id: ${productId} removido con exito del carrito con id: ${cartId}`
      );
    } else {
      throw dbRes;
    }
  } catch (error) {
    error.status = 500;
    next(error);
  }
};
