import mongoose from "mongoose";

const lotterySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prize: {
        type: String,
        required: true
    },

    ticketPrice: {
        type: Number,
        required: true
    },
    drawDate: {
        type: Date,
        require: true
    }
})

const Lottery = mongoose.model('Lottery', lotterySchema);

export default Lottery;
