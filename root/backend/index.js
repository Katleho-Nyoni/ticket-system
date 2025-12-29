import express from 'express';
// import rate from 'express-rate-limit';

const app = express();

app.use(express.json());

const API_URL = 'https://orangevalleycaa.org/api/videos';

app.get('/API/video', async (req,res) => {
    try {
         const response =await fetch(API_URL);
         const data = await response.json();
         res.json(data);
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 30000');
});