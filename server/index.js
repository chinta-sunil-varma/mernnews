import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'

import dotenv from 'dotenv'
import path from 'path';
const __dirname = path.resolve()

const app = express()
app.use(bodyParser.json({ limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true}))
app.use(cors())
dotenv.config()


app.use(express.static(path.join(__dirname,"/build")));




app.use('/api/v1/posts',postRoutes)
app.use('/api/v1/user',userRoutes)

app.get("*",function(req, res)  {
  res.sendFile(path.join(__dirname,"/build/index.html"))}) ;


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("Running server ");
})

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("db connected"))
    .catch((error)=>console.log(error))






