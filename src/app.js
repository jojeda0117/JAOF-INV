import express from "express";
import morgan from "morgan";

// Routes
import languageroutes from "./routes/language.routes";

const app= express();

// settings
app.set("prot", ventas-php-main/login.php )

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/language",languageroutes);

export default app;