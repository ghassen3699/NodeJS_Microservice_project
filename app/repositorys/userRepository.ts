import { UserModel } from "../models/dto/UserModel";
import { DBClient } from "../utility/databaseClient";

export class UserRepository{
    constructor(){}

    async createAccount({email, password, salt, phone, userType}: UserModel){
        
        // DB application
        const client = await DBClient() ;
        await client.connect() ;

        const queryString = "INSERT INTO users(phone, email, password, salt, user_type) VALUES($1,$2,$3,$4,$5)";
        const values = [phone, email, password, salt, userType] ;
        const result = await client.query(queryString, values) ;

        await client.end() ;
        if(result.rowCount > 0){
            return result.rows[0] as UserModel
        }
    }
}