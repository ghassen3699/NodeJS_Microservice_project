import {APIGatewayProxyEventV2} from 'aws-lambda' ;
import { UserService } from '../services/userService' ;
import { ErrorResponse } from '../utility/Response';
import { container} from "tsyringe" ;

const userServiceInstance = container.resolve(UserService);



export const Signup = async ( event: APIGatewayProxyEventV2 ) => {
    const requestBody = JSON.parse(event.body) ;
    console.log(requestBody)
    return userServiceInstance.CreateUser(event) ;
}


export const Login = async ( event: APIGatewayProxyEventV2 ) => {
    return userServiceInstance.UserLogin(event);
}


export const Verify = async ( event: APIGatewayProxyEventV2 ) => {
    return userServiceInstance.VerifyUser(event) ;
}


export const Profile = async ( event: APIGatewayProxyEventV2 ) => {
    const httpMethod = event.requestContext.http.method.toLowerCase() ;
    if (httpMethod === "post"){
        return userServiceInstance.CreateProfile(event) ;
    }else if (httpMethod === "get"){
        return userServiceInstance.GetProfile(event)
    }else if (httpMethod === "put"){
        return userServiceInstance.EditProfile(event) ;
    }else {
        return ErrorResponse(404, "request method is not supported")
    }
}


export const Cart = async ( event: APIGatewayProxyEventV2 ) => {
    const httpMethod = event.requestContext.http.method.toLowerCase() ;
    if (httpMethod === "get"){
        return userServiceInstance.GetCart(event) ;
    }else if (httpMethod === "post"){
        return userServiceInstance.CreateCart(event) ;
    }else if (httpMethod === "put"){
        return userServiceInstance.EditCart(event) ;
    }else{
        return ErrorResponse(404, "request method is not supported");
    }
}


export const Payment = async ( event: APIGatewayProxyEventV2 ) => {
    const httpMethod = event.requestContext.http.method.toLowerCase() ;
    if (httpMethod === "get"){
        return userServiceInstance.GetPayment(event) ;
    }else if (httpMethod === "post"){
        return userServiceInstance.CreatePayment(event) ;
    }else if (httpMethod === "put"){
        return userServiceInstance.EditPayment(event) ;
    }else{
        return ErrorResponse(404, "request method is not supported");
    }
}