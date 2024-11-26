import { Router } from "express";
import {
    shortenUrl,
    redirectUrl,
    getStats,
} from "../controllers/urlController.js";
import { apiRateLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/shorten", apiRateLimiter, shortenUrl);
router.get("/:shortId", redirectUrl);
router.get("/stats/:shortId", getStats);

export default router;
