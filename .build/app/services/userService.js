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
exports.UserService = void 0;
const Response_1 = require("../utility/Response");
class UserService {
    constructor() { }
    // User creation, validation and login Section
    CreateUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = event.body;
            console.log(body);
            return (0, Response_1.SuccessResponse)({ message: 'User created successfully' });
        });
    }
    UserLogin(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'User Login successfully' });
        });
    }
    VerifyUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'User Verified successfully' });
        });
    }
    // User profile Section
    CreateProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'Create profile successfully' });
        });
    }
    GetProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'Get profile successfully' });
        });
    }
    EditProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'Edit profile successfully' });
        });
    }
    // Cart Section
    CreateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'Create Cart successfully' });
        });
    }
    GetCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'Get cart successfully' });
        });
    }
    EditCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'Edit cart successfully' });
        });
    }
    // Payment Section
    CreatePayment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'Create Payment successfully' });
        });
    }
    GetPayment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'Edit Payment successfully' });
        });
    }
    EditPayment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, Response_1.SuccessResponse)({ message: 'Edit Payment successfully' });
        });
    }
}
exports.UserService = UserService;
