import 'dotenv/config';
import express from 'express';
import {productRouter,cartRouter,userRouter} from './src/Routes/index.js'
import path from 'path'
import ParsedArgs  from 'minimist';
import passport from 'passport';
import session from 'express-session'
const args = ParsedArgs(process.argv.slice(2));
const PORT = ParsedArgs.port || 8080;
// const MODE = args.mode ? args.mode : 'fork';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'));

app.use(
  session({
    secret: process.env.SECRET,
    cookie: {
      maxAge: Number(process.env.COOKIE_EXP_TIME),
    },
    rolling: true,
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());


/* -------------------------------------------------------------------------- */
/*                                    RUTAS                                   */
/* -------------------------------------------------------------------------- */
app.use('/api',productRouter)
app.use('/api',cartRouter)
app.use('/',userRouter)

const server = app.listen(PORT, () => {
  console.log(`🚀 🚀 server is runing at http://localhost:${PORT} 🔥`);
});

server.on('error', (err) => {
  console.log(err);
});
