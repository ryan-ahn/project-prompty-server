"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const db_1 = __importDefault(require("./loaders/db"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
// Connect MongoDB
(0, db_1.default)();
// Cors
const corsOptions = {
    origin: process.env.NODE_ENV === 'development'
        ? process.env.DEV_ORIGIN
        : process.env.PROD_ORIGIN,
    credentials: true,
};
// Use Express
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(routes_1.default);
app
    .listen(config_1.default.port, () => {
    console.log(`
    ################################################
            🛡️  Server listening on port 🛡️
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
