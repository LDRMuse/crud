// all routes in here are starting with /admins

import express from 'express'
import createAdmin from '../controllers/adminsController.js'
const router = express.Router();


router.get('/', (req, res) => {
  res.send(admins)
})

// localhost:3000/admins/register
router.post('/register', createAdmin);



export default router;
