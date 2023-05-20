/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : controllers
 */

const authServices = require('./authServices');
const gptControllers = require('./gptControllers');
const promptControllers = require('./promptControllers');

module.exports = { promptControllers, gptControllers, authControllers };
