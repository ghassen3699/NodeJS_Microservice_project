import { UserModel } from "../models/dto/UserModel";
import { DBClient } from "../utility/databaseClient";

export class UserRepository{
    constructor(){}

    async createAccount({email, password, salt, phone, userType}: UserModel){
        
        // DB application
        const client = await DBClient() ;
        await client.connect() ;

        const queryString = "INSERT INTO users(phone, email, password, salt, user_type) VALUES($1,$2,$3,$4,$5) RETURNING *";
        const values = [phone, email, password, salt, userType] ;
        const result = await client.query(queryString, values) ;

        await client.end() ;
        if(result.rowCount > 0){
            return result.rows[0] as UserModel
        }
    }

    async findAccount(email: string){
        const client = DBClient() ;
        await client.connect() ;
        const queryString = "SELECT user_id, email, password, phone, salt FROM users WHERE email = $1" ;
        const values = [email] ;
        const result = await client.query(queryString, values) ;
        await client.end() ;
        if (result.rowCount < 1){
            throw new Error('user does not exist with provided email') ;
        }

        return result.rows[0] as UserModel
    }
}