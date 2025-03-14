import express from "express";
import cors from "cors";
import emailRoutes from "./routes/EmailRouter.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", emailRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
