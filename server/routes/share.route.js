import express from "express";

import {
  createShareLink,
  getSharedItinerary,
} from "../controllers/share.controller.js";

const router = express.Router();

// Generate share link
router.post("/:id", createShareLink);

// Public itinerary
router.get("/:shareId", getSharedItinerary);

export default router;
