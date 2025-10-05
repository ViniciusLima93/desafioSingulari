import dotenv from 'dotenv'
import app from './app.ts'
dotenv.config()

const PORT = parseInt(`${process.env.PORT || 3001}`)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))

