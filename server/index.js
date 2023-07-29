import express from 'express';
import cors from 'cors';    //to enable data transfer among two diffrent URL entities/ ports
import bodyParser from 'body-parser';

// backend components
import dbConnection from './database/db.js';
import router from './routes/route.js';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));   //data came from other port needs to get parsed in json
app.use(bodyParser.urlencoded({ extended: true })); //data came from other port needs to parse its url properly as url may contain unwanted things like %20
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

dbConnection(); //connecting to database from this server