import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
export const connectDB = async() => {
    try {
        const { MONGO_CONNECTION_URL} = process.env;

        const { connection } = await mongoose.connect(MONGO_CONNECTION_URL);
        const url = `${connection.host}:${connection.port}`
        console.log(`MongoDB conectado correctamente en ${url}`);
    } catch (error) {
        console.log(error);
    }
}