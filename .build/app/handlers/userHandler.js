"use strict";
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
exports.Payment = exports.Cart = exports.Profile = exports.Verify = exports.Login = exports.Signup = void 0;
const userService_1 = require("../services/userService");
const Response_1 = require("../utility/Response");
const tsyringe_1 = require("tsyringe");
const userServiceInstance = tsyringe_1.container.resolve(userService_1.UserService);
const Signup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const requestBody = JSON.parse(event.body);
    console.log(requestBody);
    return userServiceInstance.CreateUser(event);
});
exports.Signup = Signup;
const Login = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return userServiceInstance.UserLogin(event);
});
exports.Login = Login;
const Verify = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return userServiceInstance.VerifyUser(event);
});
exports.Verify = Verify;
const Profile = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return userServiceInstance.CreateProfile(event);
    }
    else if (httpMethod === "get") {
        return userServiceInstance.GetProfile(event);
    }
    else if (httpMethod === "put") {
        return userServiceInstance.EditProfile(event);
    }
    else {
        return (0, Response_1.ErrorResponse)(404, "request method is not supported");
    }
});
exports.Profile = Profile;
const Cart = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "get") {
        return userServiceInstance.GetCart(event);
    }
    else if (httpMethod === "post") {
        return userServiceInstance.CreateCart(event);
    }
    else if (httpMethod === "put") {
        return userServiceInstance.EditCart(event);
    }
    else {
        return (0, Response_1.ErrorResponse)(404, "request method is not supported");
    }
});
exports.Cart = Cart;
const Payment = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "get") {
        return userServiceInstance.GetPayment(event);
    }
    else if (httpMethod === "post") {
        return userServiceInstance.CreatePayment(event);
    }
    else if (httpMethod === "put") {
        return userServiceInstance.EditPayment(event);
    }
    else {
        return (0, Response_1.ErrorResponse)(404, "request method is not supported");
    }
});
exports.Payment = Payment;
