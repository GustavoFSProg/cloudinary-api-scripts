import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import route from './routes'

dotenv.config()

const { PORT } = process.env

mongoose.connect(String(process.env.DATABASE))

const app = express()

app.use(express.json())
app.use(cors())
app.use(route)

app.listen(PORT, () => {
  console.log(`Api Running: ${PORT}`)
})

export default app
