import mongoose from "mongoose";
import Ticket from "../models/tickets.model.js";
import dotenv from "dotenv";

dotenv.config();

const seedTickets = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Ticket.deleteMany({});
    console.log("Old tickets removed");

    await Ticket.insertMany([
      {
        employeeName: "Email Example",
        employeeEmail: "email@example.com",
        issueType: "Software",
        description: "Unable to access email account",
        status: "Open"
      },
      {
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        issueType: "Hardware",
        description: "Keyboard not responding",
        status: "Closed"
      },
      {
        employeeName: "Jane Smith",
        employeeEmail: "jane.smith@example.com",
        issueType: "Network",
        description: "Slow internet connection",
        status: "Open"
      },
      {
        employeeName: "Fake Name",
        employeeEmail: "fake@example.com",
        issueType: "Other",
        description: "Unspecified issue",
        status: "Closed"
      },
      {
        employeeName: "Alan Turing",
        employeeEmail: "alan.turing@example.com",
        issueType: "Hardware",
        description: "The Turing Machine doesn't turn on",
        status: "Closed"
      }
    ]);

    console.log("Tickets seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedTickets();
