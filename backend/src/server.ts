import express, { Application, Router } from 'express';
import router from './routes';
const PORT: number = 8080

const app: Application = express()

app.use(express.json());
app.use(router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
