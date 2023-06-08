import express, { Application } from 'express';
const PORT: number = 8080

const app: Application = express()

app.use(express.json());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
