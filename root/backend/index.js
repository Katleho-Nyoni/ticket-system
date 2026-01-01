import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import rate from 'express-rate-limit';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // credentials: true,
}));

app.use(express.json());

app.get('/API/weather', async (req, res) => {

    const WEATHER_CONDITION_API_KEY = process.env.WEATHER_API_KEY;

    let locationQuery = req.query.location ;

    if (!locationQuery) {
        try {
            const response = await fetch('http://ip-api.com/json');
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
})



app.get('/API/video', async (req,res) => {

    const VIDEO_API_URL = 'https://orangevalleycaa.org/api/videos';

    try {
         const response =await fetch(VIDEO_API_URL);
         const data = await response.json();
         res.json(data);
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 30000');
});