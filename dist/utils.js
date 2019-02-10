"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var JWT_SECRET = process.env.JWT_SECRET;
var getUserId = function (request) {
    var header = request.request.headers.authorization;
    if (!header) {
        throw new Error('Authorization is required');
    }
    var token = header.replace('Bearer ', '');
    var userId = jwt.verify(token, JWT_SECRET).userId;
    return userId;
};
exports.default = getUserId;
