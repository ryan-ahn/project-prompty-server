"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptControllers
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const modules_1 = require("../modules");
const sendGptChainController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    try {
        const data = yield services_1.gptServices.sendGptChainService(payload);
        res
            .status(modules_1.statusCode.CREATED)
            .send(modules_1.util.success(modules_1.statusCode.CREATED, modules_1.responseMessage.SUCCESS, data));
    }
    catch (error) {
        res
            .status(modules_1.statusCode.INTERNAL_SERVER_ERROR)
            .send(modules_1.util.fail(modules_1.statusCode.INTERNAL_SERVER_ERROR, modules_1.responseMessage.INTERNAL_SERVER_ERROR));
    }
});
const sendGptRelationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    try {
        const data = yield services_1.gptServices.sendGptRelationService(payload);
        res
            .status(modules_1.statusCode.CREATED)
            .send(modules_1.util.success(modules_1.statusCode.CREATED, modules_1.responseMessage.SUCCESS, data));
    }
    catch (error) {
        res
            .status(modules_1.statusCode.INTERNAL_SERVER_ERROR)
            .send(modules_1.util.fail(modules_1.statusCode.INTERNAL_SERVER_ERROR, modules_1.responseMessage.INTERNAL_SERVER_ERROR));
    }
});
const sendGptRecommendController = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield services_1.gptServices.sendGptRecommendService();
        res
            .status(modules_1.statusCode.CREATED)
            .send(modules_1.util.success(modules_1.statusCode.CREATED, modules_1.responseMessage.SUCCESS, data));
    }
    catch (error) {
        res
            .status(modules_1.statusCode.INTERNAL_SERVER_ERROR)
            .send(modules_1.util.fail(modules_1.statusCode.INTERNAL_SERVER_ERROR, modules_1.responseMessage.INTERNAL_SERVER_ERROR));
    }
});
exports.default = {
    sendGptChainController,
    sendGptRelationController,
    sendGptRecommendController,
};
