/* --------------------------------- signup --------------------------------- */
export const getSignup = (req, res) => {
  res.render('signup');
};

export const postSignup = (req, res) => {
  const user = req.user;
  console.log(user);
  res.render('login');
};

export const getFailSignup = (req, res) => {
  console.log('Error en el registro');
  // logger.warn({ ruta: '/failsignup', error:"error en registro" });
  res.render('failSignUp', { error: 'error en registro' });
};
/* ---------------------------------- login --------------------------------- */
export const getLogin = (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.user;
    console.log('Usuario logueado!');
    //   logger.info({ ruta: '/login', metodo: 'GET' });
    
    res.render('login-ok', {
      user: user.email,
    });
  } else {
    //   logger.warn("usuario no logeado");
    res.render('login');
  }
};

export function postLogin(req, res) {
    const user = req.user;
    console.log(user);
    res.render('login')
}

export function getFailLogin(req, res) {
    console.log("Error en el login");
    res.render("failLogin", {error:"problema en logear,intente nuevamente"});
}
/* ---------------------------------- data ---------------------------------- */
export function getData(req, res) {
    res.send("esta autenticado,...data data data");
}


