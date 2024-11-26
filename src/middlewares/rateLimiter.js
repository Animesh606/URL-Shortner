import rateLimit from "express-rate-limit";

export const apiRateLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message: {
        error: "Too many requests. Please try again later.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});
