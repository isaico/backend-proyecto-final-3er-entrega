import logger from '../helpers/logger.js';
/* --------------------------------- signup --------------------------------- */
export const getSignup = (req, res) => {
  logger.info({ ruta: '/signup', metodo: 'GET' });
  res.render('signup');
};

export const postSignup = (req, res) => {
  const user = req.user;
  logger.info({ ruta: '/signup', metodo: 'POST' });
  res.render('signup-ok');
};

export const getFailSignup = (req, res) => {
  console.log('Error en el registro');
  logger.warn({ ruta: '/failsignup', error: 'error en registro' });
  logger.debug({ ruta: '/faillogin', metodo: 'GET', msg:'error de login' });
  res.render('failSignUp', { error: 'error en registro' });
};
/* ---------------------------------- login --------------------------------- */
export const getLogin = (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.user;
    logger.info({ ruta: '/login', metodo: 'GET', msg: 'Usuario logueado!' });
    res.render('login-ok', { user });
  } else {
    logger.warn('usuario no logeado');
    res.render('login');
  }
};

export function postLogin(req, res) {
  const user = req.user;
  logger.info({ ruta: '/login', metodo: 'POST', msg: 'DATOS CORRECTOS' });
  console.log(user);
  res.render('login');
}

export function getFailLogin(req, res) {
  logger.warn({ ruta: '/faillogin', metodo: 'GET', msg:'error en el login!' });
  logger.debug({ ruta: '/faillogin', metodo: 'GET', msg:'error de login' });
  res.render('failLogin', { error: 'error de login ,intente nuevamente' });
}
/* ---------------------------------- data ---------------------------------- */
export function getData(req, res) {
  //aqui la intencion es obtener los datos del session de cookies para luego enviarlos al front
  const products = req.session.products;
  const cart_id = req.session.cart_id;
  logger.info({ ruta: '/loged/getData', metodo: 'GET', products,cart_id });
  res.render('productos', { products, cart_id });
}
/* --------------------------------- logout --------------------------------- */
export const logout = (req, res) => {
  logger.debug({ ruta: '/logout', metodo: 'GET', msg:'logout' });
  req.logout();
  res.render('login');
};
