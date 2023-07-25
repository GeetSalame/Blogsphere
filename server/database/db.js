import mongoose from 'mongoose';

const Connection = async () => {

    try {
        const dbURL = 'mongodb+srv://geetsalame156:Mongodbat123@blogspheredb.8kthxtd.mongodb.net/?retryWrites=true&w=majority'

        await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Database file : Connected to Database");
    }
    catch (error) {
        console.log("Error : Error while connecting to database\nReason : ", error);
    }
}

export default Connection;