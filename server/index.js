import express from 'express';
import Connection from './database/db.js';

const PORT = 8000;
const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

Connection();