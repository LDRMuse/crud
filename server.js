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

app.use(sessionOptions)
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json())

// tell express to use the admins routes
// set the starting path for all the routes in the admins.js
app.use('/admins', adminsRoutes);

// route to the homepage
app.get('/', (req, res) => res.send('Hello from home page'));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
