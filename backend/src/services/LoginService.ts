import prismaClient from "../db/index.ts";
import type { ILogin } from "../types/ILogin.ts";
import brcrypt from 'bcrypt'
import { Auth } from "../utils/Auth.ts";

export class LoginService {

    async execute ({email, senha}:ILogin) {

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })


        if (!user) throw new Error("Usuário não encontrado")

        const isValidPassword = await brcrypt.compare(senha,user.password)
        
        if (!isValidPassword) throw new Error ("Senha inválida")

        const acessToken = Auth.generateAcessToken(user.id)
        
        return {
            message:"Login realizado com sucesso",
            user: {user: user.nome, email: user.email},
            acessToken
        }

        
    }
}