import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './variables.env' });

const MONGO_URL = process.env.DB_MONGO;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('>> DB Connect...');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;