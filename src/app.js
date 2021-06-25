import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import path from "path";
import connect from "../db";
import bodyParser from "body-parser";
import postRouter from "./routers/postRouter";

const PORT = 7000;
const app = express();

app.set("view engine", "pug");
app.set(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connect();

app.use("/", postRouter);

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START✅`);
});