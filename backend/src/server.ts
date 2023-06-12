import express, { Application, Router } from 'express';
import router from './routes';
import cors from 'cors';
const PORT: number = 8080

const app: Application = express()

const allowedOrigins = [
    "http://10.0.2.2:8080"
];

const options: cors.CorsOptions = {
    origin: allowedOrigins
  };


app.use(cors(options));

app.use(express.json());
app.use(router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
