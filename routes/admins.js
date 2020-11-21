import express from 'express'

const router = express.Router();

router.get('/admins', (req, res) => {
  res.send('Hello from admins')
})

export default router;
