import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// GET method on the root route, returns a simple HTML page
app.get('/', (_, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express Server</title>
    </head>
    <body>
        <h1>Hello from Express!</h1>
    </body>
    </html>
  `);
});

app.post('/test', (req, res) => {
    res.json(req.body);
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
