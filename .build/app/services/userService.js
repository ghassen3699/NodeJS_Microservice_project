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
const class_transformer_1 = require("class-transformer");
const userRepository_1 = require("../repositorys/userRepository");
const Response_1 = require("../utility/Response");
const tsyringe_1 = require("tsyringe");
const SignupInput_1 = require("../models/dto/SignupInput");
const errors_1 = require("../utility/errors");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    // User creation, validation and login Section
    CreateUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = (0, class_transformer_1.plainToClass)(SignupInput_1.SignupInput, event.body);
            console.log(input);
            const error = yield (0, errors_1.AppValidationError)(input);
            if (error)
                return (0, Response_1.ErrorResponse)(404, error);
            // await this.userRepository.createUserOperations() ;
            return (0, Response_1.SuccessResponse)(input);
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
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], UserService);
