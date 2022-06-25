import express from 'express'
import passport from '../utils/passport.utils.js' 

import {
    getSignup,
    getFailSignup,
    postSignup,
    getLogin,
    getFailLogin,
    postLogin,
    getData, 
    logout,
} from '../Controllers/index.js'
import {checkAuthentication} from '../middlewares/auth.middleware.js'
export const userRouter = express.Router()

/* --------------------------------- signup --------------------------------- */
userRouter.get('/signup',getSignup)
userRouter.get('/failsignup',getFailSignup)
userRouter.post('/signup',passport.authenticate("signup", {successReturnToOrRedirect:'signup-ok', failureRedirect: "/failsignup" }),postSignup)
/* ---------------------------------- login --------------------------------- */
userRouter.get('/login',getLogin)
userRouter.get('/faillogin',getFailLogin)
userRouter.post('/login', passport.authenticate("login", { failureRedirect: "/faillogin" }),postLogin)
/* -------------------------------- protected ------------------------------- */
// userRouter.get('/data',checkAuthentication,getData)
userRouter.get('/loged/products',checkAuthentication,getData)
userRouter.get('/logout',checkAuthentication,logout)