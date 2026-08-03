import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import admin from "firebase-admin";
import helmet from "helmet";
import fs from "fs";
import rateLimit from "express-rate-limit";
import Ticket from "./models/tickets.model.js";

dotenv.config();

// const credentials = JSON.parse(
//     fs.readFileSync('./serviceAccount.json')
// );

// admin.initializeApp({
//     credential: admin.credential.cert(credentials)
// });

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
  }),
);

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 100,
  delayMs: 0,
  legacyHeaders: false,
});

app.use(limiter);

// app.use(cors());
app.use(
  cors({
    origin: "https://app-of-apps-six.vercel.app/",
    // methods: ['GET', 'POST'],
    // credentials: true,
  }),
);

app.use(express.json());

// app.use(async function (req, res, next) {
//     const { authtoken } = req.headers;

//     if (authtoken){
//         try {
//             const user = await admin.auth().verifyIdToken(authtoken);
//             req.user = user;
//             console.log(user);
//         next();
//         } catch (error) {
//             res.sendStatus(401);
//             console.error(error);
//         }
//     } else {
//         res.sendStatus(403);
//     }

// });

// app.get('/', (req, res) => {
//     res.sendStatus(200)
// })

/* Weather App Endpoint */
app.get("/API/weather", async (req, res) => {
  const WEATHER_CONDITION_API_KEY = process.env.WEATHER_API_KEY;

  let locationQuery = req.query.location;

  if (!locationQuery) {
    try {
      const response = await fetch("http://ip-api.com/json");
      const data = await response.json();
      locationQuery = data.city;
    } catch (error) {
      console.error("Failed to fetch location from IP");
    }
  }

  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&appid=${WEATHER_CONDITION_API_KEY}&units=metric`;

  try {
    const results = await fetch(WEATHER_API_URL);
    const data = await results.json();
    res.json(data);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
});

/* Video App Endpoint */
app.get("/API/video", async (req, res) => {
  const VIDEO_API_URL = "https://orangevalleycaa.org/api/videos";

  try {
    const response = await fetch(VIDEO_API_URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error.message);
  }
});

/* Ticket Management System Endpoints */
app
  .route("/api/ts/tickets")
  .get(async (req, res) => {
    try {
      const tickets = await Ticket.find();
      // const tickets = await Db.collection('tickets').find({}).toArray();
      console.log(tickets);
      res.status(200).json(tickets);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const ticketEntry = req.body;
      console.log(ticketEntry);
      const ticket = new Ticket(ticketEntry);
      await ticket.save();
      res.status(200).json(ticket);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
// .get()
// .put()
// .delete();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(27000, () => {
      console.log("Server is running on http://localhost:27000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });
