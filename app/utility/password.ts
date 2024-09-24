import bcrypt from "bcrypt";

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