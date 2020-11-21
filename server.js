import express from 'express';
// allows us to take in incoming post request body
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

// route to the homepage
app.get('/', (req, res) => {
  console.log('test')
  res.send('Hello from home page')
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
