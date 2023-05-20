/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./loaders/mongoose');
const routes = require('./routes');
const config = require('./config');
dotenv.config();

// Connect DB
connectDB();

// Cors
const corsOptions = {
  origin: (origin, callback) => {
    if (true) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed Origin!'));
    }
  },
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
  res.send(`
    Current Port : ${config.port}
    Allow Origin : ${config.originHost}
    Environment : ${process.env.NODE_ENV}`);
});
