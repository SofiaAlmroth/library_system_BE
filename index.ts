import express from "express";
import categories from "./routes/categories";
import libraryItems from "./routes/libraryItems";
import users from "./routes/users";
import auth from "./routes/auth";
import cors from "cors";

console.log("✅ Backend server started (CORS DEBUG ACTIVE)");
console.log("🟢 CORS middleware applied!");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:4173",
      "https://library-system-fe.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use("/api/categories", categories);
app.use("/api/libraryItems", libraryItems);
app.use("/api/users", users);
app.use("/api/auth", auth);

const PORT = process.env.PORT || 5689;

app.listen(PORT, () => console.log("listening on port " + PORT));
