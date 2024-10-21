import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ["active", "maintenance", "disabled"],
  },
});

const Client = mongoose.models.client || mongoose.model("client", clientSchema);

export default Client;
