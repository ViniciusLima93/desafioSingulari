import type { NextFunction, Request, Response } from "express";
import { LoginService } from "../services/LoginService.ts";



export class LoginController {

    async handle (req:Request, res: Response, next:NextFunction) {
        const {email, senha} = req.body

        if (!email || !senha)  res.status(400).json({message:"Todos os campos são obrigatórios"})

            try {
                const loginUserService = new LoginService()

                const login = await loginUserService.execute({email, senha})

                res.status(200).send(login)

            }catch (error:any) {
                res.status(500).json({error:true, message:error.message})

            }

    }

}