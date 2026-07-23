import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import memberRoutes from "./routes/memberRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gym Management is running...");
});

app.use("/api/members", memberRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/admin", authRoutes);  
app.use("/api/dashboard", dashboardRoutes)

const PORT = process.env.PORT || 5000;
await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
