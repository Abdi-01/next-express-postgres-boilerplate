import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/public", express.static("./src/public"));

app.get("/api", (req, res) => {
  res.send(`Hello, this is my API`);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    console.log(`APP RUNNING at http://localhost:${PORT} ✅`);
  }
});
