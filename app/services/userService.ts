import { SuccessResponse } from '../utility/Response';
import {APIGatewayProxyEventV2} from 'aws-lambda' ;


export class UserService {
    constructor(){}


    // User creation, validation and login Section
    async CreateUser(event: APIGatewayProxyEventV2) {
        const body = event.body ;
        console.log(body)
        return SuccessResponse({message: 'User created successfully'});
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