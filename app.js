import 'dotenv/config';
import express from 'express';
import { productRouter, cartRouter, userRouter } from './src/Routes/index.js';
import path from 'path';
import ParsedArgs from 'minimist';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cluster from 'cluster';
import logger from './src/helpers/logger.js'
import os from 'os'

const args = ParsedArgs(process.argv.slice(2));
const PORT = args.port || 8080;
const MODE = args.mode ? args.mode : 'fork';
const NUM_CPUS = os.cpus().length;
const app = express();

if (cluster.isMaster && MODE == 'cluster') {
  logger.info(`Master ${process.pid} is running`);
  for (let i = 0; i < NUM_CPUS; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    logger.info(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', path.resolve('src/views'));

  app.use(
    session({
      store: MongoStore.create({
        mongoUrl: process.env.SESSIONS_URI,
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      }),
      secret: process.env.SECRET,
      cookie: {
        maxAge: Number(process.env.COOKIE_EXP_TIME),
      },
      rolling: true,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  /* -------------------------------------------------------------------------- */
  /*                                    RUTAS                                   */
  /* -------------------------------------------------------------------------- */
  app.use('/api', productRouter);
  app.use('/api', cartRouter);
  app.use('/', userRouter);

  const server = app.listen(PORT, () => {
    logger.info(`🚀 🚀 server is runing at http://localhost:${PORT} 🔥`);
  });

  server.on('error', (err) => {
    logger.warn(err);
  });
}
