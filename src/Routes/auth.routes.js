import express from 'express'
import passport from '../utils/passport.utils.js' 

import {
    getSignup,
    getFailSignup,
    postSignup,
    getLogin,
    getFailLogin,
    postLogin,
    getData 
} from '../Controllers/index.js'
import {checkAuthentication} from '../middlewares/auth.middleware.js'
export const userRouter = express.Router()

/* --------------------------------- signup --------------------------------- */
userRouter.get('/signup',getSignup)
userRouter.get('/failsingup',getFailSignup)
userRouter.post('/signup',passport.authenticate("signup", { failureRedirect: "/failsingup" }),postSignup)
/* ---------------------------------- login --------------------------------- */
userRouter.get('/login',getLogin)
userRouter.get('/faillogin',getFailLogin)
userRouter.post('/login', passport.authenticate("login", { failureRedirect: "/faillogin" }),postLogin)
/* -------------------------------- protected ------------------------------- */
userRouter.get('/data',checkAuthentication,getData)