import Express from "express";
import Dotenv from "dotenv";
import mainRoutes from "./Routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import DB_Conn from "./DB/connectDB.js";
import morgan from "morgan";


Dotenv.config({ path: "config.env" });

const app = Express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mainRoutes);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.set("view engine", "ejs");
app.set("views", "Views");

app.get("/", async (req, res) => {
    res.render("home.ejs");
});

DB_Conn();

app.listen(PORT, () => {
    console.log(`Your website is live on http://localhost:${PORT}`);
});
