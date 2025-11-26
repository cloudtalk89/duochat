import express from "express"
import path from "path"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT
const app = express()
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname,"../frontend/dist")))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
})

app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))