import { UserModel } from "app/models/dto/UserModel";

export class UserRepository{
    constructor(){}

    async createAccount({email, password, salt, phone, userType}: UserModel){
        
        // DB application
    }
}