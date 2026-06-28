const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to set COOP and COEP headers for all requests
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Cross-Origin Isolation is enabled for FFmpeg.`);
});
