export default (url) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};