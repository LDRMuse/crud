// all routes in here are starting with /admins

import express from 'express'

const router = express.Router();

const admins = [
  {
    firstName: "john",
    lastName: "Doe",
    age: "25"
  }
]

router.get('/', (req, res) => {
  res.send(admins)
})

router.post('/', (req, res) => {
const admin = req.body;


admins.push(admin)

res.send(`Admin with the first name ${admin.firstName} has been created`)
})

export default router;
