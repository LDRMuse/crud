// all routes in here are starting with /admins

import express from "express";
import AdminController from "../controllers/adminsController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Success!");
});

// localhost:3000/admins/register
router.post("/register", AdminController.createAdmin);
router.post("/login", AdminController.login);

export default router;
