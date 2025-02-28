const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit-form", async (req, res) => {
  try {
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbxbRVUEtGkFQH3Va-yz7a2p_bCgmmM9wbFtOme_zJoOlKmbBn5H6CA15KC1OYAng8o/exec",
      req.body
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to submit form" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});