"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var clientSecret = 'qwe123gdfs324';
var getUserId = function (request) {
    var header = request.request.headers.authorization;
    if (!header) {
        throw new Error('Authorization is required');
    }
    var token = header.replace('Bearer ', '');
    var userId = jwt.verify(token, clientSecret).userId;
    return userId;
};
exports.default = getUserId;
