import corsAnywhere from "cors-anywhere";
import express from "express";

const PORT = 8080; // Specify the desired port number
const app = express();

// Set up CORS Anywhere proxy
app.use(corsAnywhere());

// Start the server
app.listen(PORT, () => {
  console.log(`CORS Anywhere proxy server running on port ${PORT}`);
});
