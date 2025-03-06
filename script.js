import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import ticketRoute from "./routes/ticket.route.js"
import ticketnumber from "./routes/ticketnumber.route.js"



dotenv.config()

const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000



app.use('/api/ticket', ticketRoute)
app.use('/api', ticketnumber)





mongoose.connect((process.env.MONGODB_URI), {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

    }).catch((error) => {
        console.log("mongodb connection error", error)
    })










