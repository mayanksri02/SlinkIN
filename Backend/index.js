import express from "express";
import bodyParser from "body-parser";
import userRoute from "./route/userRoute.js";
import mongoose from "mongoose";
import cors from "cors";
import profileRouter from "./route/profileRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Node running");
});

try {
  mongoose
    .connect(
      `mongodb+srv://bhaskarsingh2179:admin%4012345@myserver.lk898.mongodb.net/slinkein`
    )
    .then(() => console.log("Connected"));
} catch (error) {
  console.log("Database connection error", error);
}
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/profile", profileRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
