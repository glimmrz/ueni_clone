import mongoose from "mongoose";

export async function connectDb() {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Database is already connected.");
    return;
  }

  if (connectionState === 2) {
    console.log("Database connection is in progress...");
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database Connected.");
  } catch (err) {
    console.error("Error occurred while connecting to the database:", err);
    throw new Error("Error occurred while connecting to the database.");
  }
}
