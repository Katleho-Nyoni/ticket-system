import mongoose from 'mongoose'

const TicketSchema = mongoose.Schema({},{
    timestamps: true
});

const Ticket = mongoose.model("Ticket", TicketSchema);

export default Ticket;