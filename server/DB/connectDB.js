import mongoose from "mongoose";

const DB_Conn = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Your DB is connected :- ${conn.connection.host}`);

    } catch (error) {
        console.log(error)
    }
}

export default DB_Conn;