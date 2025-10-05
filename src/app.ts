import express, {type Request, type Response, type NextFunction} from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { router } from './routes/Routes.ts';

const app = express ();

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(router)

app.use((req:Request, res:Response, next:NextFunction) => {
    res.send("Hello World")
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})


export default app
