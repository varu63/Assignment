import express = require("express");
import cors = require("cors");
import dotenv =require("dotenv");
import uploadRoutes from "./routes/upload.routes";
import importRoutes from "./routes/import.routes";
import healthRoutes from "./routes/health.routes";
dotenv.config();

const app = express();

// Middleware
app.use(cors());

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/import", importRoutes);
app.use("/api/health", healthRoutes);

// Root Route
app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "GrowEasy AI CSV Importer API",
  });
});

// 404 Handler
app.use((_, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;