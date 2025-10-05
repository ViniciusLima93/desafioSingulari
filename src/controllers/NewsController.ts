import { NewsService } from "../services/NewsServices.ts"
import {startOfDay, endOfDay,format, endOfWeek, startOfMonth, endOfMonth, startOfWeek, parse} from 'date-fns'
import { type Request, type Response, type NextFunction, type ErrorRequestHandler } from "express"


export class NewsController {

    async getNews (req:Request,res:Response,next:NextFunction) {
        
        try {

            const page = parseInt(req.query.page as string) || 1
            const limit = parseInt(req.query.limit as string) || 10;    
            
            const skip =  (page - 1) * limit
            const {period}  = req.query
            const now = new Date()

            let range: {start: Date, end: Date}; 
            
            const newsService = await new NewsService()
            const dataNews = newsService.allNews()


            switch (period) {
                case "day":
                    range = {
                        start:startOfDay(now),
                        end:endOfDay(now)
                    };
                    break
                case "week":
                    range = {
                        start: startOfWeek(now),
                        end: endOfWeek(now)
                    }
                    break
                case "month":
                    range = {
                        start: startOfMonth(now),
                        end:endOfMonth(now)
                    }
                    break    
                default:
                     res.status(400).json({
                        message: "Parametro periodo inválido. Use day, week ou month"
                    })
            }


            const filteredNews = dataNews.filter((e) => {
                const parsedDate = parse(e.date, "dd/MM/yyyy", new Date())
                if (parsedDate >= range.start && parsedDate < range.end ) return parsedDate
                return;
            })

            //pagination
            const paginatedNews = filteredNews.slice(skip, skip + limit)

            res.status(200).json({page, limit,total:filteredNews.length, news:paginatedNews})


        } catch (error:any) {
              res.status(500).json({error: error.message})  
        }
    }

}