import express from "express";
import postsRouter from "./router/posts.mjs";
import authRouter from "./router/auth.mjs";
import { config } from "./config.mjs";
import path from "path";
import { fileURLToPath } from "url";
import { db } from "./db/database.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.get("/auth/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login", "login.html"));
});

app.get("/auth/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "signup", "signup.html"));
});

app.use(express.json());
app.use(express.static("login"));
app.use(express.urlencoded({ extended: true }));

app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

// db.getConnection().then((connection) => console.log(connection));
app.listen(config.host.port);
