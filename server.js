import express from 'express';
import session from 'express-session'
import connectMongo from 'connect-mongo';
import db from './db.js'
import cors from 'cors'
// allows us to take in incoming post request body
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
// bring in the admins routes
import adminsRoutes from './routes/admins.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MongoStore = connectMongo(session);

let sessionOptions = session({
  secret: process.env.SECRET,
  store: new MongoStore({client: db}),
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})

// We accept any client requests...but only CORS allowed for...
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json())
app.use(sessionOptions)

// tell express to use the admins routes
// set the starting path for all the routes in the admins.js
app.use('/admins', adminsRoutes);


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
