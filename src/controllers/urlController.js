import URL from "../models/urlModel.js";
import isValidUrl from "../utils/isValidUrl.js";
import { generateNanoId } from "../utils/nanoid.js";

export const shortenUrl = async (req, res, next) => {
    try {
        const { originalUrl } = req.body;

        if (!originalUrl)
            return res.status(400).json({ error: "Original URL is required" });
        if(!isValidUrl(originalUrl))
            return res.status(400).json({ error: "Invalid URL" });

        const shortId = generateNanoId();
        await URL.create({ originalUrl, shortId });

        res.status(201).json({
            shortUrl: `${process.env.BASE_URL}/${shortId}`,
        });
    } catch (error) {
        next(error);
    }
};

export const redirectUrl = async (req, res, next) => {
    try {
        const { shortId } = req.params;
        const url = await URL.findOneAndUpdate(
            { shortId },
            { $inc: { clicks: 1 }, lastAccessed: new Date() },
            { new: true }
        );

        if (!url) return res.status(404).json({ error: "URL not found" });

        res.redirect(url.originalUrl);
    } catch (error) {
        next(error);
    }
};

export const getStats = async (req, res, next) => {
    try {
        const { shortId } = req.params;
        const url = await URL.findOne({ shortId });

        if (!url) return res.status(404).json({ error: "URL not found" });

        res.json({
            originalUrl: url.originalUrl,
            clicks: url.clicks,
            lastAccessed: url.lastAccessed,
        });
    } catch (error) {
        next(error);
    }
};
