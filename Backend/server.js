import express from "express";
import connectDB from "./config/db.js";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

//configure env
dotenv.config();

//Databse config
connectDB();

//rest Object
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

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