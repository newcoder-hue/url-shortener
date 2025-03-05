import express from "express";
import Lottery from "../models/ticket.model.js";


const Router = express.Router()


Router.get('/fetch-lottery', async (req, res) => {
    try {
        const Lotterys = await Lottery.find()
        res.json(Lotterys)
    }
    catch {
        res.status(500).json({ message: "Error fetching lottery data" })
    }
})




Router.post('/save', async (req, res) => {
    try {

        const { name, prize, ticketPrice, drawDate } = req.body;

        if (!name && !prize && !ticketPrice && !drawDate) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        const newLottery = new Lottery({
            name,
            prize,
            ticketPrice,
            drawDate
        })

        await newLottery.save();
        res.status(201).json(newLottery);


    }
    catch {
        res.status(500).send({ message: "Error Occured while saving the ticket" })
    }
})







export default Router;


