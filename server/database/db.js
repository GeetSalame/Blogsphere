import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {

    try {
        const dbURL = process.env.envDBUrl;

        await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Database file : Connected to Database");
    }
    catch (error) {
        console.log("Error : Error while connecting to database\nReason : ", error);
    }
}

export default dbConnection;