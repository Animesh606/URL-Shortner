import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    8
);

export const generateNanoId = () => nanoid();
