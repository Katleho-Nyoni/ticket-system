import mongoose from 'mongoose'

const TicketSchema = mongoose.Schema({
    employeeName : {
        type: String,
        required: true,
        default: "Undocumented Employee"
    },
    employeeEmail : {
        type : String,
        required : true,
        default : "employee@company.com"
    },
    issueType : {
        type : String,
        required : true,
        default : "Software"
    },
    description : {
        type : String,
        required : true,
        default : "Briefly describe your issue"
    },
    status : {
        type : String,
        required : true,
        default : "Open"
    }
},{
    timestamps: true
});

const Ticket = mongoose.model("Ticket", TicketSchema, "tickets");

export default Ticket;