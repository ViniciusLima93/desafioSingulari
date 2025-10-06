import bcrypt from 'bcrypt'
import type { IUser } from "../types/IUser.ts";
import prismaClient from '../db/index.ts';
import { Auth } from '../utils/Auth.ts';



export class CreateUserService {


    async addUser (userData:IUser) {
             const {nome,email,senha} = userData

             const isUser = await prismaClient.user.findFirst({
                where: {
                    email: email
                }
             })

            if(isUser) {
           throw new Error("User already exists")
           }

        
             const hashedPassword = await bcrypt.hash(senha, 10);

             const user = await prismaClient.user.create({
                data: {
                    nome,
                    email,
                    password:hashedPassword
                }
             })

             const acessToken = Auth.generateAcessToken(user.id)


            return {
                user: {
                    nome:user.nome,
                    email: user.email
                },
                acessToken,
            }

    }

}

