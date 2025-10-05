import { Router, type Request, type Response, type NextFunction } from "express";
import { NewsController } from "../controllers/NewsController.ts";
import { CreateUseController } from "../controllers/CreateUserController.ts";


export const router =  Router()
const newsController = new NewsController()
const userController =  new CreateUseController()

router.get('/news', async (req:Request,res:Response,next:NextFunction) => {

    return newsController.getNews(req,res, next)

});

router.post("/users", async (req:Request,res:Response,next:NextFunction) => {
        return userController.create(req,res,next)
})