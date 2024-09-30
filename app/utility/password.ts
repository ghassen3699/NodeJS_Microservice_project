import { UserModel } from "app/models/dto/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken" ;

const APP_SECRET = "our_app_secret" ;

export const GetSalt = async () => {
    return await bcrypt.genSalt() ;
};

export const GetHashedPassword = async(password: string, salt: string) => {
    console.log('password:', password, "salt:", salt)
    return await bcrypt.hash(password, salt);
};

export const ValidatePassword = async(enteredPassword: string, savedPassword: string, salt: string) => {
    return (await GetHashedPassword(enteredPassword, salt)) == savedPassword;
};

export const generateJWT = async ({email, user_id, phone, userType}: UserModel) => {
    return jwt.sign({
        user_id,email, phone, userType
    },
    APP_SECRET,
    {
        expiresIn: "30d",
    })
}

export const VerifyToken = async (token: string) => {
    try {
        if (!token){
            const payload = await jwt.verify(token.split(" ")[1], APP_SECRET) ;
            return payload as UserModel
        }
    } catch (error) {
        console.log(error)
        return false
    }
}