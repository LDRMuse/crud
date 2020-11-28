import express from "express";
import dotenv from "dotenv";

// bring in the admins routes
import adminsRoutes from "./routes/admins.js";

dotenv.config();

const app = express();

// ♻️ app.use(bodyParser.json());
app.use(express.json());

// ♻️ app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());

const PORT = process.env.PORT;

// tell express to use the admins routes
// set the starting path for all the routes in the admins.js
app.use("/admins", adminsRoutes);

// route to the homepage
app.get("/", (req, res) => res.send("Hello from home page"));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
