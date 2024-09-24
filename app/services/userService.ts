import { plainToClass } from 'class-transformer';
import { UserRepository } from '../repositorys/userRepository';
import { ErrorResponse, SuccessResponse } from '../utility/Response';
import {APIGatewayProxyEventV2} from 'aws-lambda' ;
import { autoInjectable } from 'tsyringe';
import { SignupInput } from '../models/dto/SignupInput';
import { AppValidationError } from '../utility/errors';
import { GetHashedPassword, GetSalt } from 'app/utility/password';


@autoInjectable()
export class UserService {

    userRepository: UserRepository
    constructor(userRepository: UserRepository){
        this.userRepository = userRepository ;
    }


    // User creation, validation and login Section
    async CreateUser(event: APIGatewayProxyEventV2) {
        const input = plainToClass(SignupInput, event.body)
        console.log(input)
        const error = await AppValidationError(input) ;
        if (error) return ErrorResponse(404, error);

        const salt = await GetSalt()
        const hashedPassword = await GetHashedPassword(input.password, salt);

        const data = await this.userRepository.createAccount({
            email: input.email,
            password: input.password,
            phone: input.phone,
            userType: "BUYER",
            salt: salt
        }) ;
        
        return SuccessResponse({});
    }

    async UserLogin(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'User Login successfully'});
    }

    async VerifyUser(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'User Verified successfully'});
    }


    // User profile Section
    async CreateProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Create profile successfully'});
    }

    async GetProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Get profile successfully'});
    }

    async EditProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Edit profile successfully'});
    }


    // Cart Section
    async CreateCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Create Cart successfully'});
    }

    async GetCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Get cart successfully'});
    }

    async EditCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Edit cart successfully'});
    }


    // Payment Section
    async CreatePayment(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Create Payment successfully'});
    }

    async GetPayment(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Edit Payment successfully'});
    }

    async EditPayment(event: APIGatewayProxyEventV2) {
        return SuccessResponse({message: 'Edit Payment successfully'});
    }
}