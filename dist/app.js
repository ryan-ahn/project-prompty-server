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
    origin: (origin, callback) => {
        if (config_1.default.nodeWhiteList.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not Allowed Origin!'));
        }
    },
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
