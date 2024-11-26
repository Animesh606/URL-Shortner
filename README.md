# URL Shortener API
This project implements a simple URL Shortener API that allows users to shorten URLs, redirect to the original URL using the shortened link, and view usage statistics. The service is built with Node.js, Express, and MongoDB, with rate limiting and proper error handling.

## Setup and Run Locally
1. **Prerequisites**
    - Node.js (v16 or higher)
    - MongoDB (local or cloud instance)
2. **Clone the Repository**
    ```bash
    git clone https://github.com/Animesh606/URL-Shortner.git
    cd URL-Shortner
    ```
3. **Install Dependencies**
    ```bash
    npm install
    ```
4. **Configure Environment Variables**\
    Create a .env file in the root directory and add the following:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    BASE_URL=http://localhost:5000/api
    ```
5. **Start the Server**
    ```bash
    npm run start
    ```
    The API will be available at http://localhost:5000.


## API Endpoints
**1. Shorten a URL**
- Endpoint: `POST /api/shorten`

- Request Body:

    ```json
    {
        "originalUrl": "https://example.com"
    }
    ```
- Response:

    ```json
    {
        "shortUrl": "http://localhost:5000/api/abcd1234"
    }
    ```
- Errors:

    - `400 Bad Request`: Missing or invalid `originalUrl`.

**2. Redirect to Original URL**
- Endpoint: `GET /:shortId`

- Description: \
    Redirects the user to the original URL corresponding to the shortId.

- Behavior:

    - If `shortId` exists, it redirects to the original URL.
    - Updates the number of clicks and the "last accessed" timestamp.

- Errors:

    `404 Not Found`: shortId does not exist.


**3. Get URL Statistics**
- Endpoint: `GET /api/stats/:shortId`

- Response:

    ```json
    {
        "originalUrl": "https://example.com",
        "clicks": 42,
        "lastAccessed": "2024-11-26T12:34:56Z"
    }
    ```
- Errors:

    `404 Not Found`: shortId does not exist.

### Rate Limiting
The API uses a rate limiter to control the number of requests:

- Maximum: 100 requests per minute per client.
- Exceeding the limit results in:
    ```json
    {
        "error": "Too many requests. Please try again later."
    }
    ```

## Deployed URL

```arduino
https://hom-url-shortner.onrender.com
```