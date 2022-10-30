import express from "express";
import { currentUser } from "@hieunguyen1104_hcmus/common";

const router = express.Router();

router.get("/api/users/currentUser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };