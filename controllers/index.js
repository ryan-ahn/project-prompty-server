/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : controllers
 */

const authControllers = require('./authControllers');
const gptControllers = require('./gptControllers');
const promptControllers = require('./promptControllers');
const pilotControllers = require('./pilotControllers');

module.exports = { authControllers, promptControllers, gptControllers, pilotControllers };
