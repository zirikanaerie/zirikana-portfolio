import { Router } from "express";
import { getHealth } from "../controllers/healthController.js";
import { postContact } from "../controllers/contactController.js";
import { getCv } from "../controllers/cvController.js";
import { validateContactPayload } from "../middleware/validateContact.js";
import { contactRateLimiter } from "../middleware/rateLimiters.js";

const router = Router();

router.get("/health", getHealth);
router.get("/cv", getCv);
router.post("/contact", contactRateLimiter, validateContactPayload, postContact);

export default router;
