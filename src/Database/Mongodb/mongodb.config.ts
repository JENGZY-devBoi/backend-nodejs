import mongoose from "mongoose";
import { Configs } from "../../Common/config";


const DB_CONNECTION = Configs.mongodb.uri ?? '';

mongoose.set('strictQuery', false);

const connectToDatabase = async () => {
  try {
    const con = await mongoose.connect(DB_CONNECTION);
    console.log(con.connections);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export default connectToDatabase;