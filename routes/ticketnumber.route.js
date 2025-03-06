import express from "express"


const Router = express.Router()

Router.post('/ticket', async (req, res) => {
    const { ticketPrice } = req.body


    try {



        if (!ticketPrice) {
            return res.status(400).json({ message: 'Ticket price is required' })
        }

        let ticketNumber = []

        if (ticketPrice <= 20) {
            for (let i = 0; i < 50; i++) {
                ticketNumber.push(Math.floor(Math.random() * 10000))
            }
        }

        else if (ticketPrice <= 40) {
            for (let i = 0; i < 50; i++) {
                ticketNumber.push(Math.floor(Math.random() * 1000000))
            }
        }

        else {
            for (let i = 0; i < 50; i++) {
                ticketNumber.push(Math.floor(Math.random() * 10000000))
            }
        }

        res.status(201).json(ticketNumber)

    }

    catch (error) {
        res.status(500).json({ message: "Error getting ticket price" })
    }

    // console.log(ticketPrice)

    return ticketPrice



})


export default Router;










