import jwt from 'jsonwebtoken';


export class Auth {

    static generateAcessToken (userId: string): string {

        if (!process.env.ACCESS_TOKEN_SECRET) throw new Error ("ACCESS_TOKEN_SECRET not defined")
        
        return jwt.sign(
            {userId},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"72h"}
        )   
            
        }

} 