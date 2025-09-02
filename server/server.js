import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//Routes
import CountryRoutes from "./routes/CountryRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use("/api", CountryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
