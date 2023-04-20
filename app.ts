/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */

import express from 'express';
import config from './config';
import connectDB from './loaders/db';
import routes from './routes';
import cors from 'cors';
require('dotenv').config();

// Connect MongoDB
connectDB();

// Cors
const corsOptions = {
  origin:
    process.env.NODE_ENV === 'development'
      ? process.env.DEV_ORIGIN
      : process.env.PROD_ORIGIN,
  credentials: true,
};

// Use Express
const app = express();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app
  .listen(config.port, () => {
    console.log(`
    ################################################
            🛡️  Server listening on ${process.env.PORT} 🛡️
    ################################################
  `);
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
app.get('/', (_, res) => {
  res.send('server clear');
});
