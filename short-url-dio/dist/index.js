"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const URLController_1 = require("./controller/URLController");
const Constants_1 = require("./config/Constants");
const mongoose_1 = __importDefault(require("mongoose"));
const api = (0, express_1.default)();
api.use(express_1.default.json());
const urlController = new URLController_1.URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
mongoose_1.default.connect(Constants_1.config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    console.log("Conectou");
    api.listen(5000, () => console.log('Express listening, ok'));
}).catch((error) => {
    console.log("falhou!!");
    console.log(error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map