"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const userRepository_1 = require("../repositorys/userRepository");
const Response_1 = require("../utility/Response");
const tsyringe_1 = require("tsyringe");
const password_1 = require("../utility/password");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    // User creation, validation and login Section
    CreateUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = JSON.parse(event.body);
                const salt = yield (0, password_1.GetSalt)();
                const hashedPassword = yield (0, password_1.GetHashedPassword)(input.password, salt);
                const data = yield this.userRepository.createAccount({
                    email: input.email,
                    password: hashedPassword,
                    phone: input.phone,
                    userType: "BUYER",
                    salt: salt
                });
                return (0, Response_1.SuccessResponse)(data);
            }
            catch (error) {
                console.log(error);
                return (0, Response_1.ErrorResponse)(500, error);
            }
        });
    }
    UserLogin(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = JSON.parse(event.body);
                const data = yield this.userRepository.findAccount(input.email);
                const verifyPassword = yield (0, password_1.ValidatePassword)(input.password, data.password, data.salt);
                if (!verifyPassword) {
                    throw new Error("Password does not match");
                }
                const token = (0, password_1.generateJWT)(data);
                return (0, Response_1.SuccessResponse)({ token });
            }
            catch (error) {
                console.log(error);
                return (0, Response_1.ErrorResponse)(500, error);
            }
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
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], UserService);
