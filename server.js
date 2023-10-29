import express from "express";
import connectDB from "./config/db.js";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";

//configure env
dotenv.config();

//Databse config
connectDB();

//rest Object
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//REST API
app.get("/", (req, res) => {
  res.send("<h1> Welcome to the ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
