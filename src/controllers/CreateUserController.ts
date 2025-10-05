import type {Response, NextFunction, Request } from "express";
import { CreateUserService } from "../services/CreateUsersServices.ts";



export class CreateUseController {

    userService =  new CreateUserService()
    async create (req: Request, res:Response, next: NextFunction) {

        const {nome, email, senha} =  req.body

        try {
            const newUser = await this.userService.addUser({nome, email,senha});
            res.status(201).json({suceess:true, message:"Usuário criado com sucesso", dataUser: newUser})

        } catch (error: any) {
           res.status(500).json({sucess: false, error: error.message})     
        }
    }
}